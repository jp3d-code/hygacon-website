import path from "node:path";
import { fileURLToPath } from "node:url";
import { imageSrc, images } from "@/shared/data/images";
import { getPayloadClient } from "./payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const assetsDir = path.resolve(dirname, "../public/assets");

const imageEntries = Object.values(images).map((image) => ({
  alt: image.alt,
  filename: image.name,
  filePath: path.join(assetsDir, image.name),
  url: imageSrc(image),
}));

export async function seedMedia() {
  const payload = await getPayloadClient();

  const existing = await payload.find({
    collection: "media",
    depth: 0,
    limit: 500,
  });

  const existingByFilename = new Map<string, number>();

  for (const doc of existing.docs) {
    if (doc.filename) {
      existingByFilename.set(doc.filename, doc.id);
    }
  }

  const mediaMap = new Map<string, number>();
  let createdCount = 0;

  for (const entry of imageEntries) {
    const existingId = existingByFilename.get(entry.filename);

    if (existingId) {
      mediaMap.set(entry.url, existingId);
      continue;
    }

    const mediaDoc = await payload.create({
      collection: "media",
      data: {
        alt: entry.alt,
      },
      filePath: entry.filePath,
      overrideAccess: true,
    });

    mediaMap.set(entry.url, mediaDoc.id);
    createdCount += 1;
  }

  if (createdCount > 0) {
    payload.logger.info(`Seed completed: media (${createdCount} created).`);
  } else {
    payload.logger.info("Seed skipped: media already exist.");
  }

  return mediaMap;
}
