"use strict";

const fs = require("fs");
const path = require("path");
const glob = require("glob");

const PKG_DIR = path.resolve(__dirname, "..");
const SRC_DIR = path.join(PKG_DIR, "src");
const OUT_FILE = path.join(SRC_DIR, "index.ts");

function detectComponentName(filePath, relNoExt) {
  const code = fs.readFileSync(filePath, "utf8");
  let m = code.match(/export\s+default\s+function\s+([A-Za-z0-9_]+)/);
  if (m && m[1]) return m[1];
  m = code.match(/const\s+([A-Za-z0-9_]+)\s*=\s*[\s\S]*?export\s+default\s+\1/);
  if (m && m[1]) return m[1];
  m = code.match(/function\s+([A-Za-z0-9_]+)\s*\([\s\S]*?export\s+default\s+\1/);
  if (m && m[1]) return m[1];
  const base = path.basename(relNoExt);
  return base
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function main() {
  const files = glob.sync("**/*.tsx", {
    cwd: SRC_DIR,
    nodir: true,
    ignore: [
      "**/index.ts",
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.stories.tsx",
      "**/*.story.tsx",
      "**/__tests__/**",
    ],
  });

  const lines = [];
  lines.push(`// ⚠️ 자동 생성 파일: scripts/gen-index.cjs 로 갱신됨`);
  lines.push(`export type { IconProps } from "./types";`);
  lines.push("");

  files.forEach((rel) => {
    const abs = path.join(SRC_DIR, rel);
    const noExt = rel.replace(/\.(tsx|ts)$/i, "");
    const name = detectComponentName(abs, noExt);
    lines.push(`export { default as ${name} } from "./${noExt}";`);
  });

  lines.push("");
  fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
  console.log(`✅ index 생성 완료: ${path.relative(PKG_DIR, OUT_FILE)}`);
}

main();


