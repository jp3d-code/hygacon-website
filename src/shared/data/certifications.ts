import type { Certification } from "@/shared/types/data";
import { imageSrc, images } from "./images";

const certifications: Certification[] = [
  {
    name: "ISO 9001",
    description: "Gestión de Calidad",
    img: imageSrc(images.iso9001),
  },
  {
    name: "ISO 14001",
    description: "Gestión Ambiental",
    img: imageSrc(images.iso14001),
  },
  {
    name: "ISO 45001",
    description: "Seguridad y Salud en el Trabajo",
    img: imageSrc(images.iso45001),
  },
  {
    name: "ISO 50001",
    description: "Gestión Energética",
    img: imageSrc(images.iso50001),
  },
  {
    name: "ISO 37001",
    description: "Sistema de Gestión Anti-Soborno",
    img: imageSrc(images.iso37001),
  },
];

export default certifications;
