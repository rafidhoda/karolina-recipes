import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const svg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
    font-family="Apple Color Emoji, Segoe UI Emoji, sans-serif" font-size="320">🍳</text>
</svg>
`;

async function build(size, name) {
  const buffer = Buffer.from(svg(size));
  await sharp(buffer).resize(size, size).png().toFile(join(publicDir, name));
  console.log(`wrote ${name}`);
}

await build(192, "icon-192.png");
await build(512, "icon-512.png");
await build(180, "apple-touch-icon.png");
await build(32, "favicon-32.png");
