import { projects } from "@/shared/data/projects";
import { slugify } from "@/shared/lib/slugify";
import { seedMedia } from "./media";
import { getPayloadClient } from "./payload";

async function seedProjects() {
  const payload = await getPayloadClient();

  const existing = await payload.count({
    collection: "projects",
  });

  if (existing.totalDocs > 0) {
    payload.logger.info("Seed skipped: projects already exist.");
    return;
  }

  const mediaMap = await seedMedia();

  for (const project of projects) {
    const mediaId = mediaMap.get(project.image);

    if (!mediaId) {
      payload.logger.warn(`Seed warning: media not found for ${project.name}.`);
      continue;
    }

    await payload.create({
      collection: "projects",
      data: {
        name: project.name,
        slug: slugify(project.name),
        sector: project.sector,
        serviceArea: project.serviceArea,
        status: project.status,
        country: project.country,
        client: project.client,
        location: project.location,
        year: project.year,
        modality: project.modality,
        summary: project.summary,
        image: mediaId,
      },
      overrideAccess: true,
    });
  }

  payload.logger.info("Seed completed: projects.");
}

await seedProjects();
