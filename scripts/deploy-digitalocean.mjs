#!/usr/bin/env node
/**
 * Deploy Links Resource to DigitalOcean App Platform.
 * Requires DIGITALOCEAN_TOKEN in .env or environment.
 *
 * Usage: npm run deploy:do
 */
import { readFileSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { execSync, spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const specPath = join(root, ".do", "app.deploy.yaml");

function loadEnv() {
  const envPath = join(root, ".env");
  const env = { ...process.env };
  if (existsSync(envPath)) {
    for (const line of readFileSync(envPath, "utf8").split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const eq = t.indexOf("=");
      if (eq === -1) continue;
      const key = t.slice(0, eq).trim();
      let val = t.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[key] = val;
    }
  }
  return env;
}

function findDoctl() {
  const paths = ["doctl", "/usr/local/bin/doctl", "/tmp/doctl"];
  for (const p of paths) {
    const r = spawnSync(p, ["version"], { stdio: "ignore" });
    if (r.status === 0) return p;
  }
  throw new Error("doctl not found. Install: brew install doctl");
}

function generateSecret() {
  return randomBytes(32).toString("base64");
}

function buildDeploySpec(authSecret, seedPassword) {
  const base = readFileSync(join(root, ".do", "app.yaml"), "utf8");
  return base
    .replace(
      /- key: AUTH_SECRET\n\s+scope: RUN_TIME\n\s+type: SECRET/,
      `- key: AUTH_SECRET\n        scope: RUN_TIME\n        type: SECRET\n        value: "${authSecret}"`,
    )
    .replace(
      /- key: SEED_ADMIN_PASSWORD\n\s+scope: RUN_TIME\n\s+type: SECRET/,
      `- key: SEED_ADMIN_PASSWORD\n        scope: RUN_TIME\n        type: SECRET\n        value: "${seedPassword}"`,
    );
}

async function main() {
  const env = loadEnv();
  const token = env.DIGITALOCEAN_TOKEN || env.DO_ACCESS_TOKEN;

  if (!token) {
    console.error(`
Missing DIGITALOCEAN_TOKEN.

1. Go to: https://cloud.digitalocean.com/account/api/tokens
2. Generate New Token → Read & Write → copy token
3. Add to .env:  DIGITALOCEAN_TOKEN=your_token_here
4. Run again:    npm run deploy:do
`);
    process.exit(1);
  }

  const doctl = findDoctl();
  execSync(`${doctl} auth init -t "${token}"`, { stdio: "inherit" });

  const authSecret = env.AUTH_SECRET?.includes("dev-secret")
    ? generateSecret()
    : env.AUTH_SECRET || generateSecret();
  const seedPassword = env.SEED_ADMIN_PASSWORD || "LinksResource@2026";

  writeFileSync(specPath, buildDeploySpec(authSecret, seedPassword));
  console.log("\nDeploy spec written with secrets.\n");

  // Check if app already exists
  let existingId = null;
  try {
    const list = execSync(`${doctl} apps list --format ID,Spec.Name --no-header`, {
      encoding: "utf8",
    });
    const line = list.split("\n").find((l) => l.includes("links-resource"));
    if (line) existingId = line.trim().split(/\s+/)[0];
  } catch {
    /* no apps yet */
  }

  if (existingId) {
    console.log(`Updating existing app ${existingId}…`);
    execSync(`${doctl} apps update ${existingId} --spec "${specPath}"`, {
      stdio: "inherit",
      cwd: root,
    });
  } else {
    console.log("Creating new DigitalOcean app…");
    execSync(`${doctl} apps create --spec "${specPath}" --wait`, {
      stdio: "inherit",
      cwd: root,
    });
  }

  const apps = execSync(`${doctl} apps list --format ID,DefaultIngress,ActiveDeployment.Phase --no-header`, {
    encoding: "utf8",
  });
  const appLine = apps.split("\n").find((l) => l.includes("links-resource")) || apps.split("\n")[0];
  const parts = appLine?.trim().split(/\s+/) ?? [];
  const appId = parts[0];
  const url = parts[1];

  console.log(`
Deployment complete!

Live URL:  ${url || "(check DigitalOcean dashboard)"}
Dashboard: https://cloud.digitalocean.com/apps/${appId}

Admin login (after first deploy finishes):
  Email:    admin@linksresource.com
  Password: ${seedPassword}

Save these production secrets:
  AUTH_SECRET=${authSecret}
`);

  if (existsSync(specPath)) unlinkSync(specPath);
}

main().catch((err) => {
  console.error("\nDeploy failed:", err.message);
  process.exit(1);
});
