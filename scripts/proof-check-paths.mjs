import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignored = new Set([".git", "node_modules"]);
const forbidden = [/\/Users\//, /\/home\//, /\/private\/tmp\//, /C:\\Users\\/i];
const checkedExtensions = new Set([".md", ".json", ".js", ".tg", ".txt", ".yml", ".yaml"]);
const failures = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(filePath);
    else if (checkedExtensions.has(path.extname(entry.name))) {
      const text = fs.readFileSync(filePath, "utf8");
      for (const pattern of forbidden) if (pattern.test(text)) failures.push(path.relative(root, filePath));
    }
  }
}
walk(root);
if (failures.length) throw new Error("Local path hygiene failed:\n" + [...new Set(failures)].join("\n"));
console.log("Path hygiene passed.");
