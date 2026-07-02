import { Eye, ShieldCheck, Target } from "lucide-react";
import type { IdentityItem } from "@/shared/types/data";

export const identity: IdentityItem[] = [
  {
    id: "mision",
    title: "Misión",
    icon: Target,
    content:
      "Ejecutar proyectos buscando la mejora continua en cada proceso, generando valor para los clientes con altos estándares de seguridad, medio ambiente y responsabilidad social, manteniéndose a la vanguardia tecnológica.",
  },
  {
    id: "vision",
    title: "Visión",
    icon: Eye,
    content:
      "Ser el consorcio líder a nivel nacional en soluciones empresariales de construcción, minería y medio ambiente.",
  },
  {
    id: "valores",
    title: "Valores",
    icon: ShieldCheck,
    // Los guardamos como lista por si quieres mapearlos en "pills" o bullet points
    items: [
      "Compromiso",
      "Respeto",
      "Confianza",
      "Trabajo en Equipo",
      "Actitud de Servicio",
      "Eficiencia",
    ],
  },
];
