import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "We text your mother good morning in your voice every day for $9 a month, because guilt-ridden adults will pay anything to stay her favorite child without ever remembering to call.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
