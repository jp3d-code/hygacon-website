import "dotenv/config";
import { seedArticles } from "./articles";
import { seedMedia } from "./media";
import { seedProjects } from "./projects";
import { seedTags } from "./tags";

export async function runSeed(): Promise<void> {
  const mediaMap = await seedMedia();
  const tagsBySlug = await seedTags();
  const projectsBySlug = await seedProjects({ tagsBySlug, mediaMap });
  await seedArticles({ tagsBySlug, projectsBySlug, mediaMap });
}
