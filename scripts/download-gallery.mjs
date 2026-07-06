import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "gallery");

const images = {
  quality:
    "https://cdn.pixabay.com/photo/2017/07/29/22/20/clipboard-863418_1280.jpg",
  staircases:
    "https://cdn.pixabay.com/photo/2017/08/07/14/15/staircase-2596825_1280.jpg",
  offices:
    "https://cdn.pixabay.com/photo/2020/09/04/06/19/cleaning-5546204_1280.jpg",
  schools:
    "https://cdn.pixabay.com/photo/2017/07/06/23/04/classroom-2477803_1280.jpg",
  gyms:
    "https://cdn.pixabay.com/photo/2020/04/06/13/37/exercise-5006768_1280.jpg",
  restaurants:
    "https://cdn.pixabay.com/photo/2017/08/11/07/53/restaurant-2629785_1280.jpg",
  hotels:
    "https://cdn.pixabay.com/photo/2016/08/05/08/27/hotel-1579355_1280.jpg"
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
