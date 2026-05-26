import configPromise from "@payload-config";
import {
  convertMarkdownToLexical,
  editorConfigFactory,
} from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { Article } from "@/payload-types";
import { getPayloadClient } from "./payload";
import { seedTags } from "./tags";

const markdownContent = `
# Introducción a la Ingeniería de Construcción

La ingeniería de construcción es una disciplina fundamental para el desarrollo de infraestructura moderna. En este artículo exploraremos los principios básicos, metodologías y herramientas que todo profesional debe conocer.

## ¿Qué es la ingeniería de construcción?

La ingeniería de construcción se encarga de planificar, diseñar y supervisar proyectos de edificación e infraestructura. Combina conocimientos técnicos con habilidades de gestión para garantizar que los proyectos se completen a tiempo, dentro del presupuesto y con los estándares de calidad requeridos.

## Fases de un proyecto constructivo

1. **Planificación**: Definición de alcance, recursos y cronograma.
2. **Diseño**: Elaboración de planos y especificaciones técnicas.
3. **Ejecución**: Construcción propiamente dicha.
4. **Control**: Monitoreo de calidad, costos y tiempos.
5. **Entrega**: Cierre del proyecto y puesta en marcha.

## Herramientas clave

- Software de modelado BIM
- Sistemas de gestión de proyectos
- Drones para topografía
- Materiales sostenibles

> "La calidad no es un acto, es un hábito." — Aristóteles

Este artículo es solo el inicio de una serie dedicada a profundizar en cada una de estas áreas.
`;

export async function seedArticles() {
  const payload = await getPayloadClient();
  const config = await configPromise;
  const editorConfig = await editorConfigFactory.default({ config });

  const lexicalContent = convertMarkdownToLexical({
    markdown: markdownContent,
    editorConfig,
  }) as SerializedEditorState;
  const content = lexicalContent as Article["content"];

  const slug = "introduccion-a-la-ingenieria-de-construccion";

  const existing = await payload.find({
    collection: "articles",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 0,
    limit: 1,
  });

  const images = await payload.find({
    collection: "media",
    depth: 0,
    limit: 1,
  });

  const coverImage = images?.docs?.[0]?.id;

  const tags = await seedTags();
  const tag = tags.get("ingenieria");

  const data: Pick<
    Article,
    | "title"
    | "slug"
    | "content"
    | "status"
    | "excerpt"
    | "publishedAt"
    | "coverImage"
    | "tags"
  > = {
    title: "Introducción a la Ingeniería de Construcción",
    slug,
    content,
    status: "published" as const,
    coverImage: coverImage || undefined,
    tags: tag ? [tag] : [],
    excerpt:
      "La ingeniería de construcción es una disciplina fundamental para el desarrollo de infraestructura moderna.",
    publishedAt: "2025-05-26",
  };

  if (existing.totalDocs > 0) {
    await payload.update({
      collection: "articles",
      id: existing.docs[0].id,
      data,
      overrideAccess: true,
    });
    payload.logger.info("Seed article updated.");
    return;
  }

  await payload.create({
    collection: "articles",
    data,
    overrideAccess: true,
  });
  payload.logger.info("Seed article created.");
}
