import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { imageSrc, images } from "@/shared/data/images";
import { managementSystem } from "@/shared/data/management-system";

export function ManagementSystemSection() {
  return (
    <Section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${imageSrc(images["43dd6fd4"])}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <Container className="relative z-10 gap-12">
        <SectionHeader>
          <SectionOverline className="text-primary">
            Sistema Integrado de Gestión — Versión: 03 · Arequipa, 15 de Mayo de
            2025
          </SectionOverline>
          <SectionTitle
            className="text-secondary-foreground"
            first="Nuestro"
            second="Sistema de Gestión"
          />
        </SectionHeader>

        <p className="max-w-3xl text-center text-white/80 leading-relaxed">
          Conscientes de nuestro propósito y en cumplimiento de nuestros
          objetivos estratégicos, consideramos que la calidad, seguridad, salud
          ocupacional y el cuidado del medio ambiente son prioridades en nuestra
          organización. Asumimos los siguientes compromisos:
        </p>

        {/* Grid de pilares */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {managementSystem.pilars.map((pilar, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-center font-bold font-condensed text-lg text-primary uppercase tracking-wide">
                {pilar.title}
              </h3>
              <p className="text-center text-sm text-white/70 leading-relaxed">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lista de compromisos */}
        <ol className="grid w-full list-none gap-3 md:grid-cols-2">
          {managementSystem.commitments.map((commitment, index) => (
            <li
              key={index}
              className="flex gap-3 rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 min-w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-secondary text-sm">
                {index + 1}
              </span>
              <span className="text-sm text-white/80 leading-relaxed">
                {commitment}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
