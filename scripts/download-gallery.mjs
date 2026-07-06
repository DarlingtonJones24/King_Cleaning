import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "gallery");

const images = {
  offices:
    "https://www.corporatecfm.com/wp-content/uploads/2023/01/Contemporary-young-black-man-in-workwear-cleaning-floor-in-openspace-office-in-front-of-yellow-plastic-signboard-with-caution.jpg",
  schools: "https://clickcleaning.co.za/wp-content/uploads/2022/12/school5.jpg",
  gyms:
    "https://tse3.mm.bing.net/th/id/OIP.LvIKbpRl0nOWOh6_1rWMvAHaED?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
  restaurants:
    "https://tse2.mm.bing.net/th/id/OIP.i5G9cZGMh-xCq83VRZNpSgHaE8?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
  hotels:
    "https://d3g2yh83to8qa2.cloudfront.net/wp-content/uploads/sites/50/2016/04/20071335/MG_1851-990x590.jpg",
  staircases:
    "https://files.autoblogging.ai/images/how-to-clean-office-elevators-and-stairwells-best-practices-for-shared-office-buildings-in-london(dzyc).jpg_01.jpeg"
};

await mkdir(outDir, { recursive: true });

for (const [name, url] of Object.entries(images)) {
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
  });
  if (!response.ok) {
    throw new Error(`${name}: HTTP ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length < 3000) {
    throw new Error(`${name}: too small (${buffer.length} bytes)`);
  }
  await writeFile(path.join(outDir, `${name}.jpg`), buffer);
  console.log(`saved ${name}.jpg ${buffer.length}`);
}
