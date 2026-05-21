import { createStaticRoute } from "@/shared/lib/routes";
import { APP_URL } from "./env";

type SectionRoute = {
  id: string;
  name: string;
  path: string;
  fullPath: string;
};

const homeRoute = createStaticRoute({
  name: "Inicio",
  path: "/",
  fullPath: APP_URL,
});

const organizacionRoute = createStaticRoute({
  name: "Organización",
  path: "/organizacion",
  fullPath: `${APP_URL}/organizacion`,
});

const serviciosRoute = createStaticRoute({
  name: "Servicios",
  path: "/servicios",
  fullPath: `${APP_URL}/servicios`,
});

const clientesRoute = createStaticRoute({
  name: "Clientes",
  path: "/clientes",
  fullPath: `${APP_URL}/clientes`,
});

const proyectosRoute = createStaticRoute({
  name: "Proyectos",
  path: "/proyectos",
  fullPath: `${APP_URL}/proyectos`,
});

const atencionRoute = createStaticRoute({
  name: "Atención",
  path: "/atencion",
  fullPath: `${APP_URL}/atencion`,
});

const contactoRoute = createStaticRoute({
  name: "Contactenos",
  path: "/contacto",
  fullPath: `${APP_URL}/contacto`,
});

const createSection = (
  route: { path: string; fullPath: string },
  id: string,
  name: string,
): SectionRoute => ({
  id,
  name,
  path: `${route.path}#${id}`,
  fullPath: `${route.fullPath}#${id}`,
});

const homeSections = {
  hero: createSection(homeRoute, "inicio-hero", "Hero"),
  sectores: createSection(homeRoute, "inicio-sectores", "Sectores"),
  servicios: createSection(homeRoute, "inicio-servicios", "Servicios"),
  valores: createSection(homeRoute, "inicio-valores", "Valores"),
  estadisticas: createSection(homeRoute, "inicio-estadisticas", "Estadísticas"),
  certificaciones: createSection(
    homeRoute,
    "inicio-certificaciones",
    "Certificaciones",
  ),
  cotizacion: createSection(homeRoute, "inicio-cotizacion", "Cotización"),
} as const;

const organizacionSections = {
  bienvenida: createSection(
    organizacionRoute,
    "organizacion-bienvenida",
    "Bienvenida",
  ),
  experiencia: createSection(
    organizacionRoute,
    "organizacion-experiencia",
    "Experiencia",
  ),
  identidad: createSection(
    organizacionRoute,
    "organizacion-identidad",
    "Identidad",
  ),
  historia: createSection(
    organizacionRoute,
    "organizacion-historia",
    "Historia",
  ),
  estadisticas: createSection(
    organizacionRoute,
    "organizacion-estadisticas",
    "Estadísticas",
  ),
  equipo: createSection(organizacionRoute, "organizacion-equipo", "Equipo"),
  valoresCorporativos: createSection(
    organizacionRoute,
    "organizacion-valores-corporativos",
    "Valores corporativos",
  ),
  empresasAsociadas: createSection(
    organizacionRoute,
    "organizacion-empresas-asociadas",
    "Empresas asociadas",
  ),
  sistemaGestion: createSection(
    organizacionRoute,
    "organizacion-sistema-gestion",
    "Sistema de gestión",
  ),
} as const;

const serviciosSections = {
  mineria: createSection(serviciosRoute, "servicios-mineria", "Minería"),
  construccionCivil: createSection(
    serviciosRoute,
    "servicios-construccion-civil",
    "Construcción Civil",
  ),
  saneamiento: createSection(
    serviciosRoute,
    "servicios-saneamiento",
    "Saneamiento",
  ),
  metalmecanica: createSection(
    serviciosRoute,
    "servicios-metalmecanica",
    "Metalmecánica",
  ),
  maquinaria: createSection(
    serviciosRoute,
    "servicios-maquinaria",
    "Maquinaria",
  ),
} as const;

const serviciosSectionOrder = [
  serviciosSections.mineria,
  serviciosSections.construccionCivil,
  serviciosSections.saneamiento,
  serviciosSections.metalmecanica,
  serviciosSections.maquinaria,
] as const;

export const routes = {
  ...homeRoute,
  home: {
    ...homeRoute,
    sections: homeSections,
  },
  organizacion: {
    ...organizacionRoute,
    sections: organizacionSections,
  },
  atencion: {
    ...atencionRoute,
  },
  contacto: {
    ...contactoRoute,
  },
  servicios: {
    ...serviciosRoute,
    sections: serviciosSections,
    sectionOrder: serviciosSectionOrder,
  },
  clientes: {
    ...clientesRoute,
  },
  proyectos: {
    ...proyectosRoute,
  },
};
