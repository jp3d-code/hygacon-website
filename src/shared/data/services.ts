import { Building, House, Layers, Monitor } from "lucide-react";
import type { Service } from "@/shared/types/data";

const services: Service[] = [
  {
    icon: Layers,
    name: "Metalurgia",
    description:
      "Consultoría y desarrollo de soluciones innovadoras para el tratamiento de minerales, lixiviación heap y optimización de procesos metalúrgicos.",
  },
  {
    icon: Monitor,
    name: "Ingeniería",
    description:
      "Proyectos BIM de alta complejidad: básica, conceptual y de detalle para instalaciones industriales y de minería en greenfield y brownfield.",
  },
  {
    icon: Building,
    name: "Fabricación",
    description:
      "Diseño y fabricación metalmecánica de alta precisión: estructuras, recipientes, tuberías y equipos industriales en nuestra planta en Lima.",
  },
  {
    icon: House,
    name: "Construcción",
    description:
      "Gestión integral EPC de obras civiles y mineras: movimiento de tierras, infraestructura, montaje electromecánico y comisionamiento.",
  },
];

export default services;
