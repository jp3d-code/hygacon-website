import { createId } from "@paralleldrive/cuid2";
import {
  accounts,
  articleAttachments,
  articles,
  media,
  sessions,
  users,
  verifications,
} from "@/db/schema";
import { db, pool } from "@/lib/db";

async function seed() {
  await db.transaction(async (tx) => {
    await tx.delete(articleAttachments);
    await tx.delete(articles);
    await tx.delete(media);
    await tx.delete(accounts);
    await tx.delete(sessions);
    await tx.delete(verifications);
    await tx.delete(users);

    const [admin] = await tx
      .insert(users)
      .values({
        id: createId(),
        name: "Admin Crop",
        email: "admin@crop.local",
        emailVerified: true,
        role: "ADMIN",
      })
      .returning();

    if (!admin) {
      throw new Error("No se pudo crear el usuario administrador");
    }

    const [createdMedia] = await tx
      .insert(media)
      .values({
        objectKey: `seed/${createId()}.jpg`,
        url: "https://picsum.photos/seed/crop-seed/1200/800",
        alt: "Imagen destacada de prueba",
        type: "IMAGE",
        size: 125_000,
        mimeType: "image/jpeg",
        filename: "seed-cover.jpg",
        uploadedBy: admin.id,
      })
      .returning();

    const [createdArticle] = await tx
      .insert(articles)
      .values({
        title: "Guia practica de jurisprudencia constitucional",
        slug: "guia-practica-jurisprudencia-constitucional",
        excerpt: "Articulo semilla generado para entorno local",
        content: JSON.stringify({
          root: {
            type: "root",
            version: 1,
            format: "",
            indent: 0,
            direction: null,
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Contenido inicial de prueba para Drizzle seed.",
                  },
                ],
              },
            ],
          },
        }),
        status: "PUBLISHED",
        authorId: admin.id,
        featuredImageId: createdMedia?.id,
        readingTimeMin: 6,
      })
      .returning();

    if (!createdArticle) {
      throw new Error("No se pudo crear el articulo de prueba");
    }

    if (createdMedia) {
      await tx.insert(articleAttachments).values({
        articleId: createdArticle.id,
        mediaId: createdMedia.id,
      });
    }
  });

  // biome-ignore lint/suspicious/noConsole: Script output
  console.log("[seed] completado");
}

seed()
  .catch((error) => {
    // biome-ignore lint/suspicious/noConsole: Script output
    console.error("[seed] error:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
