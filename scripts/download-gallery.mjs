import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "gallery");

const images = {
  offices:
    "https://images.pexels.com/photos/6195126/pexels-photo-6195126.jpeg?auto=compress&cs=tinysrgb&w=1200",
  schools:
    "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1200",
  gyms:
    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200",
  staircases:
    "https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=1200",
  restaurants:
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hotels:
    "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
  quality:
    "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hero:
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600"
};

await mkdir(outDir, { recursive: true });

for (const [name, url] of Object.entries(images)) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${name}: ${response.status} ${url}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const filePath = path.join(outDir, `${name}.jpg`);
  await writeFile(filePath, buffer);
  console.log(`saved ${name}.jpg (${buffer.length} bytes)`);
}
