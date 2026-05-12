import { Building, House, Layers, Monitor } from "lucide-react";
import type { Service } from "@/shared/types/data";

const services: Service[] = [
  {
    icon: Layers,
    name: "Metalurgia",
    image: "https://www.hlcsac.com/images/hero-4.jpg",
    brochure: "https://www.hlcsac.com/images/qr/metalurgia.png",
    excerpt:
      "Consultoría y desarrollo de soluciones innovadoras para el tratamiento de minerales, lixiviación heap y optimización de procesos metalúrgicos.",
    description:
      "Nuestra línea de negocio de Consultoría y Pruebas Metalúrgicas ofrece una amplia gama de servicios orientados al sector minero, con enfoque en la innovación y desarrollo en el procesamiento del mineral. Nacidos como Heap Leaching Consulting, la metalurgia es el corazón de HLC.",
    categories: [
      {
        label: "Consultoría",
        items: [
          "Balances de masas y metalúrgicos",
          "Desarrollo de diagramas de flujo de procesos",
          "Simulaciones de procesos metalúrgicos",
          "Diagnóstico de operaciones",
          "Ampliaciones y mejoras de procesos metalúrgicos",
          "Asesorías en elaboración de criterios de diseño",
          "Asistencia y auditorías metalúrgicas",
        ],
      },
      {
        label: "Pruebas Metalúrgicas",
        items: [
          "Preparación mecánica de muestras",
          "Análisis granulométrico",
          "Pruebas de molienda",
          "Pruebas de flotación a nivel laboratorio",
          "Pruebas de hidrometalurgia",
          "Pruebas de concentración gravimétrica",
          "Pruebas de sedimentación y filtrado",
          "Otras determinaciones",
        ],
      },
      {
        label: "Pruebas Medioambientales",
        items: [
          "Acompañamiento en la toma de muestras",
          "Mediciones fisicoquímicas",
          "Análisis de metales totales y disueltos",
          "Análisis ICP-OES, mercurio y cianuro",
          "Reporte del estudio",
          "Diagramas de flujo y balances del proceso",
        ],
      },
      {
        label: "Otros Servicios",
        items: [
          "Asesoramiento para el desarrollo de pruebas metalúrgicas",
          "Diseño, instalación y puesta en marcha de planta piloto en terreno",
          "Desarrollo de pruebas metalúrgicas en terreno",
          "Evaluación y entrenamiento de personal técnico metalúrgico",
          "Diagnóstico y auditoría de plantas metalúrgicas",
          "Diseño de diagramas de procesos metalúrgicos",
        ],
      },
    ],
  },
  {
    icon: Monitor,
    name: "Ingeniería",
    image: "https://www.hlcsac.com/images/hero-1.jpg",
    brochure: "https://www.hlcsac.com/images/qr/ingenieria.png",
    excerpt:
      "Proyectos BIM de alta complejidad: básica, conceptual y de detalle para instalaciones industriales y de minería en greenfield y brownfield.",
    description:
      "Desarrollamos soluciones integrales de ingeniería para proyectos industriales y mineros, aplicando metodologías BIM y herramientas avanzadas de diseño para maximizar la eficiencia, seguridad y constructibilidad.",
    categories: [
      {
        label: "Ingeniería Conceptual",
        items: [
          "Estudios de prefactibilidad y factibilidad",
          "Definición de alcance y criterios de diseño",
          "Desarrollo de layouts generales",
          "Estimaciones CAPEX y OPEX",
          "Evaluación técnico-económica de proyectos",
        ],
      },
      {
        label: "Ingeniería Básica",
        items: [
          "Diagramas PFD y P&ID",
          "Memorias de cálculo",
          "Diseño de procesos industriales",
          "Especificaciones técnicas de equipos",
          "Planos multidisciplinarios",
        ],
      },
      {
        label: "Ingeniería de Detalle",
        items: [
          "Modelado BIM 3D",
          "Planos de fabricación y montaje",
          "Diseño estructural y mecánico",
          "Diseño de piping y soportes",
          "Metrados y documentación IFC",
        ],
      },
      {
        label: "Supervisión y Soporte",
        items: [
          "Asistencia técnica en obra",
          "Gestión de cambios de ingeniería",
          "Compatibilización multidisciplinaria",
          "Control de calidad documental",
          "Soporte durante comisionamiento",
        ],
      },
    ],
  },
  {
    icon: Building,
    name: "Fabricación",
    image: "https://www.hlcsac.com/images/hero-7.jpg",
    brochure: "https://www.hlcsac.com/images/qr/fabricacion.png",
    excerpt:
      "Diseño y fabricación metalmecánica de alta precisión: estructuras, recipientes, tuberías y equipos industriales en nuestra planta en Lima.",
    description:
      "Contamos con infraestructura y personal especializado para la fabricación metalmecánica de equipos y componentes industriales, garantizando altos estándares de calidad, seguridad y cumplimiento técnico.",
    categories: [
      {
        label: "Estructuras Metálicas",
        items: [
          "Fabricación de estructuras livianas y pesadas",
          "Plataformas y racks industriales",
          "Tolvas y chutes",
          "Puentes y soportes estructurales",
          "Escaleras y barandas industriales",
        ],
      },
      {
        label: "Equipos Industriales",
        items: [
          "Fabricación de tanques y recipientes",
          "Equipos para procesamiento de minerales",
          "Sistemas de bombeo y piping",
          "Equipos de almacenamiento",
          "Skids modulares",
        ],
      },
      {
        label: "Procesos de Manufactura",
        items: [
          "Corte CNC y plasma",
          "Soldadura especializada",
          "Rolado y plegado de planchas",
          "Maquinado y mecanizado",
          "Pintura y recubrimientos industriales",
        ],
      },
      {
        label: "Control de Calidad",
        items: [
          "Inspección dimensional",
          "Ensayos no destructivos",
          "Control de soldadura",
          "Protocolos de calidad",
          "Dossier de fabricación",
        ],
      },
    ],
  },
  {
    icon: House,
    name: "Construcción",
    image: "https://www.hlcsac.com/images/hero-3.jpg",
    brochure: "https://www.hlcsac.com/images/qr/construccion.png",
    excerpt:
      "Gestión integral EPC de obras civiles y mineras: movimiento de tierras, infraestructura, montaje electromecánico y comisionamiento.",
    description:
      "Ejecutamos proyectos de construcción industrial y minera bajo estándares internacionales de seguridad, calidad y cumplimiento, integrando obras civiles, montaje y puesta en marcha.",
    categories: [
      {
        label: "Obras Civiles",
        items: [
          "Movimiento de tierras",
          "Construcción de cimentaciones",
          "Obras de concreto armado",
          "Vías y accesos industriales",
          "Sistemas de drenaje",
        ],
      },
      {
        label: "Montaje Electromecánico",
        items: [
          "Montaje de estructuras metálicas",
          "Instalación de equipos industriales",
          "Montaje de piping",
          "Instalaciones eléctricas industriales",
          "Instrumentación y control",
        ],
      },
      {
        label: "Gestión EPC",
        items: [
          "Planificación y control de obra",
          "Gestión de contratistas",
          "Control de costos y avance",
          "Gestión de seguridad y calidad",
          "Administración integral del proyecto",
        ],
      },
      {
        label: "Comisionamiento",
        items: [
          "Pruebas preoperacionales",
          "Puesta en marcha de sistemas",
          "Validación de equipos",
          "Capacitación operativa",
          "Entrega y cierre de proyecto",
        ],
      },
    ],
  },
];

export default services;
