import assert from "node:assert/strict";
import fs from "node:fs";

const manifest = JSON.parse(fs.readFileSync("proof/manifest.json", "utf8"));
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
assert.equal(packageJson.devDependencies?.["@topogram/cli"], manifest.cliVersion, "@topogram/cli pin must match proof manifest");
for (const filePath of manifest.requiredFiles || []) assert.equal(fs.existsSync(filePath), true, "Missing required file: " + filePath);
for (const filePath of manifest.absentFiles || []) assert.equal(fs.existsSync(filePath), false, "Unexpected file exists: " + filePath);
for (const entry of manifest.requiredJson || []) {
  const json = JSON.parse(fs.readFileSync(entry.path, "utf8"));
  for (const key of entry.keys || []) assert.notEqual(key.split(".").reduce((value, part) => value?.[part], json), undefined, entry.path + " missing " + key);
  for (const [key, expected] of Object.entries(entry.equals || {})) assert.deepEqual(key.split(".").reduce((value, part) => value?.[part], json), expected, entry.path + " expected " + key);
}
for (const entry of manifest.requiredText || []) {
  const text = fs.readFileSync(entry.path, "utf8");
  for (const snippet of entry.includes || []) assert.equal(text.includes(snippet), true, entry.path + " missing snippet: " + snippet);
}
console.log("Proof audit passed for " + manifest.step + ".");
