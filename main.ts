// "Name That Pothole" — make.fun entry for
// "Ridiculous at First Glance, Real by the Second".
// Writes the one-sentence pitch to $OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "We sell naming rights to potholes for $50 a patch, because drivers report them for free and local shops pay to put their name on the repair.";

// Competition rules: a single sentence, at most 200 characters.
if (PITCH.length > 200 || PITCH.trim().split(/[.!?]\s/).length !== 1) {
  throw new Error(`Pitch violates the one-sentence / 200-character rule (${PITCH.length} chars).`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote ${PITCH.length}-character pitch to ${join(outDir, "entry.txt")}`);
