import { seedMedia } from "./media";
import { seedProjects } from "./projects";
import "dotenv/config";

async function main() {
  await seedMedia();
  await seedProjects();
}

main().catch((error) => {
  // biome-ignore lint/suspicious/noConsole: Allow console.error for logging errors
  console.error("Seed failed:", error);
  process.exit(1);
});
