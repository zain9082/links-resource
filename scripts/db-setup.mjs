#!/usr/bin/env node
import { execSync } from "node:child_process";
import { createConnection } from "node:net";
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { loadProjectEnv, projectRoot } from "./load-env.mjs";

const env = loadProjectEnv();

function run(cmd) {
  console.log(`\n→ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: projectRoot, env });
}

function dockerAvailable() {
  return spawnSync("docker", ["info"], { stdio: "ignore" }).status === 0;
}

function startDockerDesktop() {
  if (process.platform !== "darwin") return false;
  if (!existsSync("/Applications/Docker.app")) return false;
  console.log("Starting Docker Desktop…");
  spawnSync("open", ["-a", "Docker"], { stdio: "ignore" });
  return true;
}

function waitForPort(host, port, timeoutMs = 120000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryConnect = () => {
      const socket = createConnection({ host, port }, () => {
        socket.end();
        resolve(true);
      });
      socket.on("error", () => {
        socket.destroy();
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Timed out waiting for ${host}:${port}`));
        } else {
          setTimeout(tryConnect, 1500);
        }
      });
    };
    tryConnect();
  });
}

async function main() {
  console.log("Links Resource — database setup");
  console.log(`Using DATABASE_URL → ${env.DATABASE_URL}\n`);

  if (!dockerAvailable()) {
    if (!startDockerDesktop()) {
      console.error(`
Docker is not running.

1. Open Docker Desktop and wait until it is running
2. Run: npm run db:setup
`);
      process.exit(1);
    }
    for (let i = 0; i < 60 && !dockerAvailable(); i++) {
      await new Promise((r) => setTimeout(r, 2000));
    }
    if (!dockerAvailable()) {
      console.error("Docker did not start in time.");
      process.exit(1);
    }
  }

  run("docker compose up -d");
  console.log("\nWaiting for PostgreSQL on localhost:5433…");
  await waitForPort("127.0.0.1", 5433);
  run("npx prisma db push");
  run("npx tsx prisma/seed.ts");

  console.log(`
Done.

Admin login:
  Email:    admin@linksresource.com
  Password: (value of SEED_ADMIN_PASSWORD in your .env file)
`);
}

main().catch((err) => {
  console.error("\nDatabase setup failed:", err.message);
  process.exit(1);
});
