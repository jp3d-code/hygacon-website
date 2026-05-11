import { Eye, ShieldCheck, Target } from "lucide-react";
import type { IdentityItem } from "@/shared/types/data";

export const identity: IdentityItem[] = [
  {
    id: "mision",
    title: "Misión",
    icon: Target,
    content:
      "Brindar una gestión innovadora con estándares óptimos de calidad, manejo de riesgos, seguridad, salud en el trabajo, cuidado del medio ambiente, responsabilidad social y conducta ética empresarial en consultoría metalúrgica, ingeniería, construcción y gerenciamiento de proyectos, que nos permita generar mayor valor y satisfacción a nuestros clientes y otros grupos de interés.",
  },
  {
    id: "vision",
    title: "Visión",
    icon: Eye,
    content:
      "Ser una empresa líder nacional e internacional en consultoría metalúrgica, ingeniería, construcción y gerenciamiento de proyectos para los sectores minero-metalúrgico, oil & gas, infraestructura, energía y saneamiento.",
  },
  {
    id: "valores",
    title: "Valores",
    icon: ShieldCheck,
    // Los guardamos como lista por si quieres mapearlos en "pills" o bullet points
    items: [
      "Innovación",
      "Compromiso",
      "Excelencia",
      "Integridad",
      "Seguridad y Salud",
    ],
  },
];
