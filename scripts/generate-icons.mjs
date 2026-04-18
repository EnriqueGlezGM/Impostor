import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const ICONS = [
  ['public/apple-touch-icon.png', 180],
  ['public/pwa-192.png', 192],
  ['public/pwa-512.png', 512],
];

const clamp = (value, min = 0, max = 255) => Math.max(min, Math.min(max, value));

const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i += 1) {
  let c = i;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[i] = c >>> 0;
}

const crc32 = (buffer) => {
  let c = 0xffffffff;
  for (const byte of buffer) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

const chunk = (type, data) => {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
};

const smooth = (edge0, edge1, value) => {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const mix = (a, b, amount) => a + (b - a) * amount;

const blend = (pixels, size, x, y, color, alpha) => {
  if (x < 0 || y < 0 || x >= size || y >= size || alpha <= 0) return;
  const offset = (y * size + x) * 4;
  const inverse = 1 - alpha;
  pixels[offset] = clamp(color[0] * alpha + pixels[offset] * inverse);
  pixels[offset + 1] = clamp(color[1] * alpha + pixels[offset + 1] * inverse);
  pixels[offset + 2] = clamp(color[2] * alpha + pixels[offset + 2] * inverse);
  pixels[offset + 3] = 255;
};

const roundedRectAlpha = (px, py, x, y, width, height, radius) => {
  const cx = x + width / 2;
  const cy = y + height / 2;
  const qx = Math.abs(px - cx) - (width / 2 - radius);
  const qy = Math.abs(py - cy) - (height / 2 - radius);
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  const inside = Math.min(Math.max(qx, qy), 0);
  const distance = outside + inside - radius;
  return 1 - smooth(-1.5, 1.5, distance);
};

const ellipseAlpha = (px, py, cx, cy, rx, ry) => {
  const distance = (Math.hypot((px - cx) / rx, (py - cy) / ry) - 1) * Math.min(rx, ry);
  return 1 - smooth(-1.5, 1.5, distance);
};

const drawRoundedRect = (pixels, size, rect, color, alpha = 1) => {
  const [x, y, width, height, radius] = rect.map((value) => value * size);
  const minX = Math.max(0, Math.floor(x - 2));
  const maxX = Math.min(size - 1, Math.ceil(x + width + 2));
  const minY = Math.max(0, Math.floor(y - 2));
  const maxY = Math.min(size - 1, Math.ceil(y + height + 2));

  for (let py = minY; py <= maxY; py += 1) {
    for (let px = minX; px <= maxX; px += 1) {
      blend(pixels, size, px, py, color, roundedRectAlpha(px + 0.5, py + 0.5, x, y, width, height, radius) * alpha);
    }
  }
};

const drawEllipse = (pixels, size, ellipse, color, alpha = 1) => {
  const [cx, cy, rx, ry] = ellipse.map((value) => value * size);
  const minX = Math.max(0, Math.floor(cx - rx - 2));
  const maxX = Math.min(size - 1, Math.ceil(cx + rx + 2));
  const minY = Math.max(0, Math.floor(cy - ry - 2));
  const maxY = Math.min(size - 1, Math.ceil(cy + ry + 2));

  for (let py = minY; py <= maxY; py += 1) {
    for (let px = minX; px <= maxX; px += 1) {
      blend(pixels, size, px, py, color, ellipseAlpha(px + 0.5, py + 0.5, cx, cy, rx, ry) * alpha);
    }
  }
};

const makeIcon = (size) => {
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const offset = (y * size + x) * 4;
      const t = (x + y) / (size * 2);
      pixels[offset] = clamp(mix(23, 5, t));
      pixels[offset + 1] = clamp(mix(42, 11, t));
      pixels[offset + 2] = clamp(mix(47, 13, t));
      pixels[offset + 3] = 255;
    }
  }

  drawEllipse(pixels, size, [0.76, 0.19, 0.072, 0.072], [247, 184, 1], 0.9);
  drawRoundedRect(pixels, size, [0.12, 0.43, 0.74, 0.29, 0.08], [7, 16, 20], 0.95);
  drawRoundedRect(pixels, size, [0.28, 0.2, 0.46, 0.52, 0.19], [7, 16, 20], 1);
  drawRoundedRect(pixels, size, [0.32, 0.24, 0.38, 0.46, 0.16], [218, 28, 62], 1);
  drawRoundedRect(pixels, size, [0.18, 0.43, 0.2, 0.24, 0.07], [218, 28, 62], 1);
  drawRoundedRect(pixels, size, [0.68, 0.48, 0.15, 0.18, 0.05], [143, 19, 43], 1);
  drawRoundedRect(pixels, size, [0.2, 0.64, 0.14, 0.2, 0.055], [7, 16, 20], 1);
  drawRoundedRect(pixels, size, [0.46, 0.64, 0.14, 0.2, 0.055], [7, 16, 20], 1);
  drawRoundedRect(pixels, size, [0.22, 0.64, 0.1, 0.17, 0.04], [194, 22, 53], 1);
  drawRoundedRect(pixels, size, [0.48, 0.64, 0.1, 0.17, 0.04], [194, 22, 53], 1);
  drawRoundedRect(pixels, size, [0.39, 0.31, 0.28, 0.16, 0.075], [7, 16, 20], 1);
  drawRoundedRect(pixels, size, [0.415, 0.335, 0.23, 0.11, 0.055], [92, 207, 222], 1);
  drawEllipse(pixels, size, [0.49, 0.37, 0.075, 0.025], [255, 255, 255], 0.72);

  return pixels;
};

const toPng = (pixels, size) => {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y += 1) {
    const rowOffset = y * (size * 4 + 1);
    raw[rowOffset] = 0;
    Buffer.from(pixels.subarray(y * size * 4, (y + 1) * size * 4)).copy(raw, rowOffset + 1);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;
  header[10] = 0;
  header[11] = 0;
  header[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
};

for (const [path, size] of ICONS) {
  writeFileSync(path, toPng(makeIcon(size), size));
}
