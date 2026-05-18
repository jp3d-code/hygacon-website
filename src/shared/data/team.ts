import { imageSrc, images } from "@/shared/data/images";
import type { TeamMember } from "@/shared/types/data";

export const team: TeamMember[] = [
  {
    name: "Hyrum G. Quispe Ticona",
    role: "Gerente General",
    img: imageSrc(images.be7c55a2),
    bio: "Ingeniero Civil, especialista en gerencia de proyectos.",
  },
  {
    name: "Jaime Soto Vilca",
    role: "Gerente de Trabajos de Saneamiento",
    img: imageSrc(images.f1df974d),
    bio: "Ingeniero Sanitario con experiencia en proyectos de agua potable.",
  },
  {
    name: "Wilber Nina Quispe",
    role: "Gerente de Área de Infraestructura",
    img: imageSrc(images.d0159846),
    bio: "Ingeniero Civil con enfoque en infraestructura vial y urbana.",
  },
  {
    name: "Jesús Ventura Arias",
    role: "Gerente de Área de Metal Mecánico",
    img: imageSrc(images.db5b829e),
    bio: "Especialista en fabricación metalmecánica y montaje industrial.",
  },
  {
    name: "Anthony Quispe Ticona",
    role: "Administrador",
    img: imageSrc(images.f6547048),
    bio: "Gestión administrativa y control de costos operativos.",
  },
  {
    name: "Rocío Laura Roca",
    role: "Contabilidad",
    img: imageSrc(images.cb1ce521),
    bio: "Contadora pública con experiencia en ejecución de obra.",
  },
  {
    name: "Herbert Mamani Masco",
    role: "Logística",
    img: imageSrc(images["96630e33"]),
    bio: "Logística de obra, abastecimiento y coordinación de equipos.",
  },
];
