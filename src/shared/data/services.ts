import { Building, HardHat, Pickaxe, ShoppingCart, Truck } from "lucide-react";
import { imageSrc, images } from "@/shared/data/images";
import type { Service } from "@/shared/types/data";

const services: Service[] = [
  {
    icon: Pickaxe,
    name: "Minería",
    image: imageSrc(images.d0159846),
    excerpt: "Soluciones empresariales para operaciones mineras.",
    description:
      "Servicios especializados para proyectos mineros con enfoque en seguridad, medio ambiente y continuidad operativa.",
    categories: [
      {
        label: "Ingeniería y Gestión",
        items: [
          "Planificación y consultoría minera",
          "Supervisión técnica de operaciones",
          "Gestión de seguridad y salud",
          "Control de calidad en procesos",
        ],
      },
      {
        label: "Medio Ambiente",
        items: [
          "Monitoreo de componentes ambientales",
          "Planes de manejo y cumplimiento",
          "Gestión de residuos y remediación",
          "Control de impactos operativos",
        ],
      },
      {
        label: "Soporte en Campo",
        items: [
          "Movilización de equipos y cuadrillas",
          "Mantenimiento operativo",
          "Logística y abastecimiento",
          "Respuesta a contingencias",
        ],
      },
    ],
  },
  {
    icon: Building,
    name: "Construcción Civil",
    image: imageSrc(images.f6547048),
    excerpt: "Ejecución, supervisión y consultoría de obras civiles.",
    description:
      "Desarrollamos proyectos de edificación, viales, terminales y aeropuertos con gestión integral y control de calidad.",
    categories: [
      {
        label: "Edificación",
        items: [
          "Edificaciones institucionales",
          "Complejos urbanos y comerciales",
          "Supervisión de estructuras",
          "Acabados y habilitaciones",
        ],
      },
      {
        label: "Infraestructura Vial",
        items: [
          "Carreteras y pavimentos",
          "Puentes y obras de arte",
          "Señalización y seguridad vial",
          "Mantenimiento de vías",
        ],
      },
      {
        label: "Terminales y Aeropuertos",
        items: [
          "Terminales terrestres",
          "Plataformas logísticas",
          "Infraestructura aeroportuaria",
          "Servicios complementarios",
        ],
      },
    ],
  },
  {
    icon: Truck,
    name: "Saneamiento",
    image: imageSrc(images.d145c549),
    excerpt: "Sistemas de agua potable y tratamiento de aguas.",
    description:
      "Ejecutamos obras de saneamiento, represas e irrigaciones para comunidades y proyectos de infraestructura.",
    categories: [
      {
        label: "Agua Potable",
        items: [
          "Captación y conducción",
          "Redes matrices y secundarias",
          "Reservorios y estaciones",
          "Conexiones domiciliarias",
        ],
      },
      {
        label: "Aguas Residuales",
        items: [
          "Colectores y emisores",
          "Plantas de tratamiento (PTAR)",
          "Pozos y cámaras de inspección",
          "Rehabilitación de redes",
        ],
      },
      {
        label: "Represas e Irrigación",
        items: [
          "Represas y embalses",
          "Canales de irrigación",
          "Obras de derivación",
          "Sistemas de drenaje",
        ],
      },
    ],
  },
  {
    icon: HardHat,
    name: "Metalmecánica",
    image: imageSrc(images.db5b829e),
    excerpt: "Fabricación y montaje de estructuras metálicas.",
    description:
      "Servicios metalmecánicos para proyectos industriales y de infraestructura con montaje especializado.",
    categories: [
      {
        label: "Estructuras Metálicas",
        items: [
          "Diseño y fabricación",
          "Montaje de estructuras",
          "Coberturas y naves",
          "Tratamiento anticorrosivo",
        ],
      },
      {
        label: "Piping y Soldadura",
        items: [
          "Instalación de tuberías",
          "Soldadura homologada",
          "Pruebas hidrostáticas",
          "Ensayos no destructivos",
        ],
      },
      {
        label: "Montaje Industrial",
        items: [
          "Montaje de equipos",
          "Alineamiento y nivelación",
          "Mantenimiento de planta",
          "Paradas programadas",
        ],
      },
    ],
  },
  {
    icon: ShoppingCart,
    name: "Maquinaria",
    image: imageSrc(images["0384e667"]),
    excerpt: "Importación, venta y alquiler de equipos y vehículos.",
    description:
      "Disponibilidad de maquinarias, vehículos y equipos de construcción para operación y soporte en obra.",
    categories: [
      {
        label: "Maquinaria Pesada",
        items: [
          "Excavadoras y cargadores",
          "Retroexcavadoras y tractores",
          "Camiones volquete",
          "Equipos de compactación",
        ],
      },
      {
        label: "Vehículos y Transporte",
        items: [
          "Camionetas 4x4",
          "Ómnibus y transporte de personal",
          "Cisternas de agua",
          "Logística de campo",
        ],
      },
      {
        label: "Equipos y Soporte",
        items: [
          "Alquiler de equipos",
          "Mantenimiento y repuestos",
          "Soporte técnico en obra",
          "Capacitación de operadores",
        ],
      },
    ],
  },
];

export default services;
