// Derives header-safe logo assets from the master lockup:
// - logo-mark.png       flame mark only, brand colours, real transparency (light chrome)
// - logo-mark-light.png same mark recoloured cream + gold (dark chrome)
// The master file ships with an opaque white background, so the ink is separated
// by inverting the "composited over white" blend per pixel.
// Run: node scripts/build-logo-marks.mjs
import sharp from "sharp";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const SRC = path.join(PUBLIC_DIR, "logo-primary.png");
const SIZE = 320;

// The master stacks the mark over the latin wordmark; keep only the top part.
const MARK_HEIGHT_RATIO = 0.74;

const MAROON = [130, 26, 46];
const GOLD = [198, 166, 110];
const CREAM = [247, 242, 233];
const GOLD_ON_DARK = [214, 182, 122];
const FLOOR = 26;

async function render(pixels, info, colours, outFile) {
  const buffer = await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();

  await sharp(buffer)
    .trim()
    .resize(SIZE, SIZE, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(PUBLIC_DIR, outFile));

  return colours;
}

async function main() {
  const { width = 0, height = 0 } = await sharp(SRC).metadata();

  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .extract({ left: 0, top: 0, width, height: Math.round(height * MARK_HEIGHT_RATIO) })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const brand = Buffer.alloc(data.length);
  const light = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    // Maroon keeps blue above green; the gold rays are the other way round.
    const isMaroon = b >= g;
    const pure = isMaroon ? MAROON : GOLD;
    const ink = (255 - Math.min(r, g, b)) * (255 / (255 - Math.min(...pure)));
    // The source background is noisy off-white, so drop the faint veil it leaves behind.
    const inked = ink <= FLOOR ? 0 : ((ink - FLOOR) * 255) / (255 - FLOOR);
    const alpha = Math.max(0, Math.min(255, Math.min(a, Math.round(inked))));
    const tint = isMaroon ? CREAM : GOLD_ON_DARK;

    for (let c = 0; c < 3; c += 1) {
      brand[i + c] = pure[c];
      light[i + c] = tint[c];
    }
    brand[i + 3] = alpha;
    light[i + 3] = alpha;
  }

  await render(brand, info, "brand", "logo-mark.png");
  await render(light, info, "light", "logo-mark-light.png");

  console.log(`built ${SIZE}px marks from ${width}x${height} source`);
}

main();
