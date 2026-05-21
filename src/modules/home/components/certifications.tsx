import {
  Container,
  Section,
  SectionDescription,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import certifications from "@/shared/data/certifications";

export function Certifications() {
  return (
    <Section id={routes.home.sections.certificaciones.id} className="">
      <Container>
        <SectionHeader className="text-center">
          <SectionOverline className="text-primary">
            Respaldo Internacional
          </SectionOverline>
          <SectionTitle first="NUESTRAS" second="CERTIFICACIONES" />
          <SectionDescription className="">
            Contamos con las certificaciones más exigentes del sector en calidad
            y seguridad.
          </SectionDescription>
        </SectionHeader>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center rounded-xl border border-border p-10 transition-all duration-300"
            >
              <img
                src={cert.img}
                alt={cert.name}
                className="mb-6 max-h-full max-w-45 object-contain"
              />

              <div className="space-y-2 text-center">
                <h3 className="font-semibold text-lg text-secondary uppercase tracking-wider">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
