import { imageSrc, images } from "@/shared/data/images";
import type { Sector } from "@/shared/types/data";

const Sectors: Sector[] = [
  {
    name: "Ingeniería",
    description:
      "Ejecución, supervisión y consultoría de obras de edificación, viales, terminales, aeropuertos, saneamiento, represas e irrigaciones.",
    img: imageSrc(images.f1df974d),
  },
  {
    name: "Especialidades",
    description:
      "Proyectos electromecánicos, telecomunicaciones, ambientales y mineros para entornos públicos y privados.",
    img: imageSrc(images.db5b829e),
  },
  {
    name: "Servicios Generales",
    description:
      "Movimiento de tierras y soluciones empresariales integrales con logística de obra y soporte operativo.",
    img: imageSrc(images.d145c549),
  },
];

export default Sectors;
