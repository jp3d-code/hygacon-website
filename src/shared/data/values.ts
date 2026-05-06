import {
  CheckCircle,
  Medal,
  Paperclip,
  Shield,
  Star,
  Users,
} from "lucide-react";
import type { Value } from "@/shared/types/data";

const values: Value[] = [
  {
    icon: Star,
    name: "Tecnología BIM",
    description:
      "Especialistas en el desarrollo de Proyectos BIM, un valor agregado que diferencia y optimiza cada proyecto.",
  },
  {
    icon: Shield,
    name: "Seguridad",
    description:
      "Promovemos una cultura donde prima la seguridad, la salud y el cuidado del medio ambiente en cada operación.",
  },
  {
    icon: CheckCircle,
    name: "Calidad",
    description:
      "Gestión innovadora con los materiales más selectos y procesos certificados ISO 9001 e ISO 45001.",
  },
  {
    icon: Paperclip,
    name: "767 Proyectos",
    description:
      "Más de 767 proyectos culminados satisfactoriamente con 0 accidentes mortales. Un récord que refleja nuestra disciplina.",
  },
  {
    icon: Users,
    name: "Equipo Profesional",
    description:
      "Personal altamente capacitado y motivado, buscando siempre soluciones que conlleven al éxito del proyecto.",
  },
  {
    icon: Medal,
    name: "Certificaciones",
    description:
      "Contamos con las certificaciones ISO 9001 e ISO 45001 en materia de seguridad y calidad del servicio.",
  },
];

export default values;
