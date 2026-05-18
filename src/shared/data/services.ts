import { Building, HardHat, Pickaxe, ShoppingCart, Truck } from "lucide-react";
import { imageSrc, images } from "@/shared/data/images";
import type { Service } from "@/shared/types/data";

const services: Service[] = [
  {
    icon: Pickaxe,
    name: "Ingeniería",
    image: imageSrc(images.f6547048),
    excerpt:
      "Ejecución, supervisión y consultoría de obras de edificación, viales, terminales, aeropuertos, saneamiento, represas e irrigaciones.",
    description:
      "Nuestra línea de Ingeniería ofrece soluciones multidisciplinarias de alta complejidad para los sectores público y privado. Contamos con un equipo especializado en la gestión integral de proyectos de infraestructura, asegurando los más altos estándares de calidad, seguridad y cumplimiento de plazos desde la etapa de diseño conceptual hasta la entrega final de la obra.",
    categories: [
      {
        label: "Alcance y Gestión",
        items: [
          "Planificación y Consultoría Estratégica",
          "Dirección y Ejecución de Obras Complejas",
          "Supervisión Técnica y Control de Calidad Asegurado",
          "Auditoría de Proyectos de Infraestructura",
        ],
      },
      {
        label: "Infraestructura Vial y Urbana",
        items: [
          "Edificaciones de Gran Envergadura y Complejos Urbanos",
          "Infraestructura Vial, Carreteras, Asfalto y Puentes",
          "Terminales Terrestres y Centros Logísticos",
          "Aeropuertos e Infraestructura Aeroportuaria Especializada",
        ],
      },
      {
        label: "Obras Hidráulicas y Saneamiento",
        items: [
          "Obras de Saneamiento Matriz y Redes de Agua Potable",
          "Plantas de Tratamiento de Aguas Residuales (PTAR)",
          "Represas, Embalses y Estructuras de Almacenamiento Hidráulico",
          "Sistemas de Irrigación, Canales y Canales de Derivación",
        ],
      },
    ],
  },
  {
    icon: HardHat,
    name: "Especialidades",
    image: imageSrc(images.d0159846),
    excerpt:
      "Proyectos electromecánicos, telecomunicaciones, ambientales y mineros con enfoque integral.",
    description:
      "Brindamos servicios de ingeniería especializada orientados a optimizar los procesos críticos de la industria moderna. Desarrollamos soluciones técnicas a medida en sectores clave, garantizando la sostenibilidad ambiental, la eficiencia energética y la continuidad operativa mediante la integración de tecnologías avanzadas y normativas internacionales vigentes.",
    categories: [
      {
        label: "Ingeniería Electromecánica",
        items: [
          "Montaje de Subestaciones y Redes de Alta y Media Tensión",
          "Sistemas de Iluminación Industrial y Fuerza Motriz",
          "Instalaciones Eléctricas de Potencia y Tableros de Control",
          "Sistemas de Climatización Industrial (HVAC)",
        ],
      },
      {
        label: "Telecomunicaciones y Automatización",
        items: [
          "Infraestructura de Telecomunicaciones y Enlaces de Radio",
          "Tendido y Certificación de Redes de Fibra Óptica",
          "Sistemas de Automatización, Instrumentación y SCADA",
          "Seguridad Electrónica, CCTV y Control de Accesos",
        ],
      },
      {
        label: "Gestión Ambiental y Minería",
        items: [
          "Estudios de Impacto Ambiental (EIA) y DIA",
          "Pruebas Medioambientales y Monitoreo de Componentes",
          "Ingeniería y Desarrollo de Proyectos Mineros",
          "Optimización de Procesos de Planta y Beneficio",
        ],
      },
    ],
  },
  {
    icon: Building,
    name: "Metalmecánica",
    image: imageSrc(images.db5b829e),
    excerpt:
      "Trabajos en estructuras metálicas, piping y montaje de componentes industriales.",
    description:
      "Soportados por nuestra experiencia técnica, la división de Metalmecánica está especializada en la fabricación, montaje e instalación de estructuras de acero de alta resistencia y sistemas de tuberías industriales para el transporte de fluidos y gases. Implementamos rigurosos ensayos no destructivos (END) para asegurar la integridad estructural en entornos exigentes.",
    categories: [
      {
        label: "Estructuras Metálicas",
        items: [
          "Diseño, Cálculo y Fabricación de Estructuras Pesadas",
          "Montaje de Naves Industriales, Almacenes y Coberturas",
          "Fabricación de Tanques de Almacenamiento y Silos",
          "Galvanizado y Tratamiento Superficial Anticorrosivo",
        ],
      },
      {
        label: "Sistemas de Piping",
        items: [
          "Instalación de Tuberías de Proceso e Industriales",
          "Soldadura Especializada y Certificada (Homologada)",
          "Líneas de Alta Presión para Fluidos y Gases",
          "Pruebas Hidrostáticas y Ensayos No Destructivos (END)",
        ],
      },
      {
        label: "Montaje e Instalaciones",
        items: [
          "Montaje Mecánico de Equipos de Planta y Molinos",
          "Instalación de Fajas Transportadoras y Alimentadores",
          "Mantenimiento Correctivo, Paradas de Planta y Overhaul",
          "Alineamiento Láser y Nivelación de Precisión",
        ],
      },
    ],
  },
  {
    icon: ShoppingCart,
    name: "Comercial",
    image: imageSrc(images["66fa2131"]),
    excerpt:
      "Importación, venta y alquiler de maquinarias, vehículos y equipos de construcción.",
    description:
      "Facilitamos el equipamiento logístico y operativo necesario para cualquier proyecto de construcción o minería. Nuestra división Comercial gestiona una flota moderna y diversificada de maquinarias y vehículos de marcas líderes, ofreciendo modelos flexibles de adquisición y soporte técnico postventa para maximizar la disponibilidad de los equipos en campo.",
    categories: [
      {
        label: "Maquinaria y Equipos",
        items: [
          "Importación Directa de Equipos de Última Tecnología",
          "Venta de Maquinaria Pesada para Minería y Construcción",
          "Alquiler de Línea Amarilla (Excavadoras, Tractores, Cargadores)",
          "Suministro de Equipos Ligeros de Construcción",
        ],
      },
      {
        label: "Vehículos y Logística",
        items: [
          "Venta y Alquiler de Camiones Volquetes y Mezcladores",
          "Vehículos de Soporte, Camionetas 4x4 y Auxiliares",
          "Equipos de Izaje, Grúas Telescópicas y Montacargas",
          "Flotas Logísticas Personalizadas para Proyectos",
        ],
      },
      {
        label: "Soporte y Repuestos",
        items: [
          "Suministro de Repuestos Originales y Consumibles",
          "Servicio Técnico Especializado en Campo y Taller",
          "Contratos de Mantenimiento Preventivo de Flotas",
          "Capacitación de Operadores y Certificaciones",
        ],
      },
    ],
  },
  {
    icon: Truck,
    name: "Servicios Generales",
    image: imageSrc(images.d145c549),
    excerpt: "Movimiento de tierras y soluciones empresariales integrales.",
    description:
      "Ofrecemos soporte operativo integral en las etapas preliminares y de mantenimiento de los proyectos. Nos encargamos de la adecuación del terreno y de proveer soluciones corporativas personalizadas que permiten a nuestros clientes concentrarse en su núcleo de negocio, garantizando eficiencia logística y seguridad en cada intervención.",
    categories: [
      {
        label: "Movimiento de Tierras",
        items: [
          "Excavaciones Masivas, Cortes y Rellenos Controlados",
          "Perfilado, Nivelación y Compactación de Terrenos",
          "Eliminación y Acarreo de Material Excedente",
          "Estabilización de Taludes y Control de Erosión",
        ],
      },
      {
        label: "Obras Preliminares y Logística",
        items: [
          "Habilitación de Accesos y Vías de Penetración Temporales",
          "Construcción y Montaje de Campamentos Modulares",
          "Instalación de Cercos Perimétricos y Obras Provisionales",
          "Transporte Logístico de Materiales y Cargas Especiales",
        ],
      },
      {
        label: "Soluciones y Mantenimiento",
        items: [
          "Servicios Integrales de Facility Management Corporativo",
          "Demoliciones Controladas y Desmantelamiento de Estructuras",
          "Limpieza Técnica Industrial y Remediación de Áreas",
          "Mantenimiento de Infraestructura Existente y Pintura",
        ],
      },
    ],
  },
];

export default services;
