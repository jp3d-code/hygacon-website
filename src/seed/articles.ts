import configPromise from "@payload-config";
import {
  convertMarkdownToLexical,
  editorConfigFactory,
  type SanitizedServerEditorConfig,
} from "@payloadcms/richtext-lexical";
import type { Article } from "@/payload-types";
import { getPayloadClient } from "./payload";

const markdownArticles = [
  {
    title: "Introducción a la Ingeniería de Construcción",
    slug: "introduccion-a-la-ingenieria-de-construccion",
    excerpt:
      "La ingeniería de construcción es una disciplina fundamental para el desarrollo de infraestructura moderna.",
    content: `
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
`,
  },
  {
    title: "Gestión de Proyectos de Construcción",
    slug: "gestion-de-proyectos-de-construccion",
    excerpt:
      "Aprende las mejores prácticas para gestionar proyectos de construcción de manera eficiente y exitosa.",
    content: `
# Gestión de Proyectos de Construcción

La gestión de proyectos de construcción es crucial para el éxito de cualquier obra. Requiere una combinación de habilidades técnicas, de liderazgo y de planificación estratégica.

## Principios fundamentales

1. **Alcance definido**: Saber exactamente qué se debe entregar.
2. **Cronograma realista**: Establecer tiempos factibles.
3. **Presupuesto controlado**: Mantener los costos bajo control.
4. **Calidad asegurada**: Garantizar estándares de excelencia.

## Herramientas de gestión moderna

- BIM 360 para colaboración
- Primavera P6 para programación
- Procore para gestión de campo
- Microsoft Project para seguimiento

## Communication is key

La comunicación efectiva entre todos los stakeholders es esencial para el éxito del proyecto.
`,
  },
  {
    title: "Sostenibilidad en la Construcción",
    slug: "sostenibilidad-en-la-construccion",
    excerpt:
      "Descubre cómo la construcción sostenible está transformando el sector hacia un futuro más verde.",
    content: `
# Sostenibilidad en la Construcción

La construcción sostenible se ha convertido en una prioridad global. Los proyectos deben minimizar su impacto ambiental mientras maximizan la eficiencia y la habitabilidad.

## Principios de construcción sostenible

1. **Eficiencia energética**: Diseños que reducen el consumo.
2. **Materiales reciclados**: Uso de recursos renovables.
3. **Gestión del agua**: Sistemas de captación y reuse.
4. **Espacios saludables**: Calidad del aire interior.

## Certificaciones importantes

- LEED (Leadership in Energy and Environmental Design)
- BREEAM (Building Research Establishment Environmental Assessment Method)
- Passivhaus

## El futuro es ahora

La transición hacia una construcción más sostenible no es solo una tendencia, es una necesidad urgente.
`,
  },
];

export async function seedArticles({
  tagsBySlug,
  projectsBySlug: _projectsBySlug,
  mediaMap,
}: {
  tagsBySlug: Map<string, number>;
  projectsBySlug: Map<string, number>;
  mediaMap: Map<string, number>;
}) {
  const payload = await getPayloadClient();
  const config = await configPromise;
  const editorConfig: SanitizedServerEditorConfig =
    await editorConfigFactory.default({ config });

  const tagIds = Array.from(tagsBySlug.values());
  const mediaIds = Array.from(mediaMap.values());

  for (const article of markdownArticles) {
    const lexicalContent = convertMarkdownToLexical({
      markdown: article.content,
      editorConfig,
    }) as Article["content"];

    const existing = await payload.find({
      collection: "articles",
      where: {
        slug: {
          equals: article.slug,
        },
      },
      depth: 0,
      limit: 1,
    });

    const randomMediaId =
      mediaIds.length > 0
        ? mediaIds[Math.floor(Math.random() * mediaIds.length)]
        : undefined;

    const shuffledTags = [...tagIds].sort(() => Math.random() - 0.5);
    const articleTags = shuffledTags.slice(
      0,
      Math.floor(Math.random() * 3) + 1,
    );

    const data = {
      title: article.title,
      slug: article.slug,
      content: lexicalContent,
      status: "published" as const,
      coverImage: randomMediaId,
      tags: articleTags,
      excerpt: article.excerpt,
      publishedAt: new Date().toISOString().split("T")[0],
    };

    if (existing.totalDocs > 0) {
      await payload.update({
        collection: "articles",
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
      });
      payload.logger.info(`Seed article updated: ${article.title}`);
      continue;
    }

    await payload.create({
      collection: "articles",
      data,
      overrideAccess: true,
    });
    payload.logger.info(`Seed article created: ${article.title}`);
  }
}
