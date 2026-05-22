import childProcess from "node:child_process";
import fs from "node:fs";
import path from "node:path";

function run(command, args) {
  const result = childProcess.spawnSync(command, args, { cwd: process.cwd(), encoding: "utf8", env: { ...process.env, FORCE_COLOR: "0" }, maxBuffer: 1024 * 1024 * 20 });
  if (result.status !== 0) throw new Error(["Command failed: " + command + " " + args.join(" "), result.stdout, result.stderr].filter(Boolean).join("\n"));
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
}

run(process.execPath, ["./scripts/proof-check-paths.mjs"]);
run(process.execPath, ["./scripts/proof-audit.mjs"]);
run("npm", ["run", "build:components"]);
run("npm", ["test"]);
const topogramBin = path.join(process.cwd(), "node_modules", ".bin", process.platform === "win32" ? "topogram.cmd" : "topogram");
if (fs.existsSync("topo")) run(topogramBin, ["check", ".", "--json"]);
if (fs.existsSync("topogram.sdlc-policy.json")) run(topogramBin, ["sdlc", "check", ".", "--strict"]);
const status = childProcess.spawnSync("git", ["status", "--short"], { cwd: process.cwd(), encoding: "utf8" });
if (status.status !== 0) throw new Error(status.stderr || "git status failed");
if (status.stdout.trim()) throw new Error("Proof verification must leave a clean worktree:\n" + status.stdout);
console.log("Proof verification passed.");
