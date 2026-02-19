import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'og-default.png');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#161b22"/>
    </linearGradient>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#58a6ff"/>
      <stop offset="100%" stop-color="#58a6ff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 64}" y1="0" x2="${i * 64}" y2="${height}" stroke="#30363d" stroke-width="0.5" stroke-opacity="0.3"/>`).join('')}
  ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${i * 64}" x2="${width}" y2="${i * 64}" stroke="#30363d" stroke-width="0.5" stroke-opacity="0.3"/>`).join('')}

  <!-- Accent glow (top-left) -->
  <ellipse cx="0" cy="0" rx="400" ry="300" fill="#58a6ff" fill-opacity="0.03"/>

  <!-- Accent bar -->
  <rect x="80" y="272" width="4" height="90" rx="2" fill="#58a6ff"/>

  <!-- Name -->
  <text x="104" y="315" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="700" fill="#e6edf3" letter-spacing="-0.5">
    Marcos Natã Santos
  </text>

  <!-- URL -->
  <text x="104" y="358" font-family="monospace" font-size="20" fill="#8b949e" fill-opacity="0.5">
    marcosnataqs.com
  </text>

  <!-- Bottom accent line -->
  <rect x="0" y="${height - 3}" width="${width}" height="3" fill="url(#line)"/>

  <!-- Border -->
  <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="#30363d" stroke-width="1" stroke-opacity="0.5"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outputPath);
console.log(`Generated: ${outputPath}`);
