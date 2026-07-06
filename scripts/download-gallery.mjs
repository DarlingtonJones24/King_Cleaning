import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "gallery");

const images = {
  hero: "https://cdn.pixabay.com/photo/2026/03/02/15/24/los-angeles-cs-commercial-cleaning-10152157_1280.jpg",
  offices: "https://cdn.pixabay.com/photo/2020/09/04/06/19/cleaning-5546204_1280.jpg",
  schools: "https://cdn.pixabay.com/photo/2017/07/06/23/04/classroom-2477803_1280.jpg",
  gyms: "https://cdn.pixabay.com/photo/2020/04/06/13/37/exercise-5006768_1280.jpg",
  staircases:
    "https://files.autoblogging.ai/images/how-to-clean-office-elevators-and-stairwells-best-practices-for-shared-office-buildings-in-london(dzyc).jpg_01.jpeg",
  restaurants: "https://cdn.pixabay.com/photo/2017/08/11/07/53/restaurant-2629785_1280.jpg",
  hotels: "https://cdn.pixabay.com/photo/2016/08/05/08/27/hotel-1579355_1280.jpg",
  quality: "https://cdn.pixabay.com/photo/2016/03/27/21/02/cleaning-1283943_1280.jpg"
};

await mkdir(outDir, { recursive: true });

for (const [name, url] of Object.entries(images)) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${name}: HTTP ${response.status} for ${url}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 5000) {
    throw new Error(`${name}: file too small (${buffer.length} bytes)`);
  }
  await writeFile(path.join(outDir, `${name}.jpg`), buffer);
  console.log(`OK ${name}.jpg (${buffer.length} bytes)`);
}
