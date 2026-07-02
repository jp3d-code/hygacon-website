import { slugify } from "@/shared/lib/slugify";
import { getPayloadClient } from "./payload";

const tagNames = [
  "Ingeniería",
  "Gestión",
  "Sostenibilidad",
  "Proyectos",
  "Innovación",
  "Construcción",
  "Infraestructura",
  "Tecnología",
];

export async function seedTags() {
  const payload = await getPayloadClient();
  const tagsBySlug = new Map<string, number>();

  for (const name of tagNames) {
    const slug = slugify(name);

    const existing = await payload.find({
      collection: "tags",
      where: {
        slug: {
          equals: slug,
        },
      },
      depth: 0,
      limit: 1,
    });

    if (existing.totalDocs > 0) {
      tagsBySlug.set(slug, existing.docs[0].id);
      continue;
    }

    await payload.create({
      collection: "tags",
      data: {
        name,
        slug,
      },
      overrideAccess: true,
    });

    const created = await payload.find({
      collection: "tags",
      where: {
        slug: { equals: slug },
      },
      depth: 0,
      limit: 1,
    });

    if (created.totalDocs > 0) {
      tagsBySlug.set(slug, created.docs[0].id);
    }
  }

  payload.logger.info(`Seed completed: tags. Total: ${tagsBySlug.size}`);
  return tagsBySlug;
}
