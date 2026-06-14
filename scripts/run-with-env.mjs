#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { loadProjectEnv, projectRoot } from "./load-env.mjs";

const env = loadProjectEnv();
const cmd = process.argv.slice(2).join(" ");

if (!cmd) {
  console.error("Usage: node scripts/run-with-env.mjs <command>");
  process.exit(1);
}

const result = spawnSync(cmd, {
  shell: true,
  stdio: "inherit",
  cwd: projectRoot,
  env,
});

process.exit(result.status ?? 1);
