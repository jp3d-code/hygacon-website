import {
  CheckCircle,
  Droplets,
  Handshake,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import type { Value } from "@/shared/types/data";

const values: Value[] = [
  {
    icon: Shield,
    name: "Seguridad",
    description:
      "Garantía de seguridad para el personal, equipos y procesos en cada proyecto.",
  },
  {
    icon: Users,
    name: "Trabajo en Equipo",
    description:
      "Metodología colaborativa para lograr mejores resultados en campo.",
  },
  {
    icon: Handshake,
    name: "Confianza",
    description:
      "Relaciones basadas en la consideración personal y profesional.",
  },
  {
    icon: Zap,
    name: "Eficiencia",
    description: "Optimización de recursos para cumplir con lo solicitado.",
  },
  {
    icon: CheckCircle,
    name: "Compromiso",
    description:
      "Orientación al trabajo bien realizado y satisfacción del cliente.",
  },
  {
    icon: Droplets,
    name: "Cuidado Ambiental",
    description: "Prevención de impactos y cuidado del medio ambiente en obra.",
  },
];

export default values;
