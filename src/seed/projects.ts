import { imageSrc, images } from "@/shared/data/images";
import { slugify } from "@/shared/lib/slugify";
import { getPayloadClient } from "./payload";

const projects = [
  {
    name: "Planta Metalúrgica Shahuindo",
    sector: "Minería",
    serviceArea: "Metalurgia",
    status: "Concluido",
    country: "Perú",
    client: "Minera Shahuindo S.A.C.",
    location: "Cajamarca, Perú",
    year: "2017",
    modality: "EPC",
    summary:
      "Implementación de planta metalúrgica para procesamiento y recuperación de metales en operación minera.",
    image: imageSrc(images.db5b829e),
  },
  {
    name: "Truck Shop Cerro Verde",
    sector: "Minería",
    serviceArea: "Construcción",
    status: "Concluido",
    country: "Perú",
    client: "Sociedad Minera Cerro Verde S.A.A.",
    location: "Arequipa, Perú",
    year: "2016",
    modality: "Construcción",
    summary:
      "Construcción de infraestructura para mantenimiento de flota pesada y operaciones de mina.",
    image: imageSrc(images.f6547048),
  },
  {
    name: "Planta Metalúrgica La Arena",
    sector: "Minería",
    serviceArea: "Metalurgia",
    status: "Concluido",
    country: "Perú",
    client: "La Arena S.A.",
    location: "La Libertad, Perú",
    year: "2016",
    modality: "Ingeniería de Detalle",
    summary:
      "Desarrollo de ingeniería y soporte para planta metalúrgica de la unidad minera.",
    image: imageSrc(images["01c01b59"]),
  },
  {
    name: "Planta Metalúrgica La Zanja",
    sector: "Minería",
    serviceArea: "Ingeniería",
    status: "Concluido",
    country: "Perú",
    client: "Minera La Zanja S.R.L.",
    location: "Santa Cruz, Cajamarca, Perú",
    year: "2015",
    modality: "Ingeniería de Detalle",
    summary:
      "Ingeniería de procesos y detalle para planta metalúrgica en operación minera.",
    image: imageSrc(images["39c03d38"]),
  },
  {
    name: "Planta CIC Minsur",
    sector: "Minería",
    serviceArea: "Ingeniería",
    status: "Concluido",
    country: "Perú",
    client: "Minsur S.A.",
    location: "San Rafael, Puno, Perú",
    year: "2014",
    modality: "Ingeniería de Detalle",
    summary:
      "Ingeniería de detalle de la Planta CIC (Carbon in Column) de 850 m³/h para recuperación de oro en la unidad minera San Rafael.",
    image: imageSrc(images["3314858f"]),
  },
  {
    name: "Truck Shop Las Bambas",
    sector: "Minería",
    serviceArea: "Construcción",
    status: "Concluido",
    country: "Perú",
    client: "MMG Las Bambas S.A.",
    location: "Cotabambas, Apurímac, Perú",
    year: "2014",
    modality: "Construcción",
    summary:
      "Ejecución de infraestructura para servicios de mantenimiento de maquinaria pesada.",
    image: imageSrc(images["0384e667"]),
  },
  {
    name: "Truck Shop Mina Justa",
    sector: "Minería",
    serviceArea: "Construcción",
    status: "Concluido",
    country: "Perú",
    client: "Marcobre S.A.C.",
    location: "Nazca, Ica, Perú",
    year: "2013",
    modality: "Construcción",
    summary:
      "Construcción de taller especializado para mantenimiento de flota minera.",
    image: imageSrc(images.f1df974d),
  },
  {
    name: "Planta ADR COMARSA",
    sector: "Minería",
    serviceArea: "Construcción",
    status: "Concluido",
    country: "Perú",
    client: "Cía Minera Aurífera Santa Rosa S.A.",
    location: "La Libertad, Perú",
    year: "2013",
    modality: "Construcción",
    summary:
      "Construcción de planta ADR para recuperación de metales en operación minera.",
    image: imageSrc(images["3cdce100"]),
  },
  {
    name: "Truck Shop Toquepala",
    sector: "Minería",
    serviceArea: "Construcción",
    status: "Concluido",
    country: "Perú",
    client: "Southern Perú Copper Corporation",
    location: "Ilabaya, Tacna, Perú",
    year: "2013",
    modality: "Construcción",
    summary: "Infraestructura para mantenimiento y soporte de equipos de mina.",
    image: imageSrc(images.eff50fdf),
  },
  {
    name: "EPC Planta Merrill & Crowe Coimolache",
    sector: "Minería",
    serviceArea: "Construcción",
    status: "Concluido",
    country: "Perú",
    client: "Minera Coimolache S.A.",
    location: "Cajamarca, Perú",
    year: "2011",
    modality: "EPC",
    summary:
      "Ejecución EPC de planta Merrill & Crowe para recuperación de metales preciosos.",
    image: imageSrc(images["2eaa3a79"]),
  },
];

export async function seedProjects({
  tagsBySlug: _tagsBySlug,
  mediaMap,
}: {
  tagsBySlug: Map<string, number>;
  mediaMap: Map<string, number>;
}) {
  const payload = await getPayloadClient();

  const existing = await payload.count({
    collection: "projects",
  });

  if (existing.totalDocs > 0) {
    payload.logger.info("Seed skipped: projects already exist.");
    return new Map<string, number>();
  }

  const projectsBySlug = new Map<string, number>();

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

    projectsBySlug.set(slugify(project.name), mediaId);
  }

  payload.logger.info("Seed completed: projects.");
  return projectsBySlug;
}
