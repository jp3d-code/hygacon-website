import "dotenv/config";
import { seedArticles } from "./articles";
import { seedMedia } from "./media";
import { getPayloadClient } from "./payload";
import { seedProjects } from "./projects";
import { seedTags } from "./tags";

// async function main() {
//   await seedMedia();
//   await seedTags();
//   await seedProjects();
//   await seedArticles();
// }

export async function isDatabaseEmpty(): Promise<boolean> {
  const payload = await getPayloadClient();

  const collections = ["tags", "projects", "articles", "media"] as const;

  for (const slug of collections) {
    const result = await payload.find({ collection: slug, limit: 1, depth: 0 });
    if (result.totalDocs > 0) {
      payload.logger.info(
        `Seed skipped: collection "${slug}" already has ${result.totalDocs} document(s).`,
      );
      return false;
    }
  }

  return true;
}

export async function runSeed(): Promise<void> {
  const empty = await isDatabaseEmpty();

  if (!empty) {
    return;
  }

  const mediaMap = await seedMedia();
  const tagsBySlug = await seedTags();
  const projectsBySlug = await seedProjects({ tagsBySlug, mediaMap });
  await seedArticles({ tagsBySlug, projectsBySlug, mediaMap });
}
