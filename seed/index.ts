import "dotenv/config";
import { seedArticles } from "./articles";
import { seedMedia } from "./media";
import { seedProjects } from "./projects";
import { seedTags } from "./tags";

async function main() {
  await seedMedia();
  await seedTags();
  await seedProjects();
  await seedArticles();
}

main().catch((error) => {
  // biome-ignore lint/suspicious/noConsole: Allow console.error for logging errors
  console.error("Seed failed:", error);
  process.exit(1);
});
