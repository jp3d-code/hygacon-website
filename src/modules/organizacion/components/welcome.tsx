import { LinkBtm } from "@/shared/components/ui/link";
import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import { imageSrc, images } from "@/shared/data/images";

export function WelcomeSection() {
  return (
    <Section className="bg-secondary">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <img
          src={imageSrc(images.be7c55a2)}
          alt="Consorcio HYGACON en obra"
          className="aspect-square w-full rounded-xl object-cover object-3/4 object-top"
        />

        {/* Columna contenido */}
        <div className="flex w-full flex-col gap-6">
          <SectionHeader className="items-start">
            <SectionOverline>Quiénes somos</SectionOverline>
            <SectionTitle
              first="Consorcio"
              second="HYGACON"
              className="justify-start text-secondary-foreground"
            />
          </SectionHeader>

          <p className="text-muted text-sm leading-relaxed">
            Ejecutamos proyectos de ingeniería, saneamiento y servicios
            generales con enfoque en seguridad, medio ambiente y responsabilidad
            social.
          </p>

          <p className="text-muted text-sm leading-relaxed">
            Contamos con equipos multidisciplinarios, maquinaria propia y una
            cultura de trabajo colaborativo que asegura cumplimiento y calidad
            en cada obra.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <LinkBtm
              href={routes.contacto.path}
              variant={"default"}
              size={"lg"}
              className="font-semibold uppercase"
            >
              Ver Proyectos
            </LinkBtm>
            <LinkBtm
              href={routes.contacto.path}
              variant={"outline-dark"}
              size={"lg"}
              className="uppercase"
            >
              Contáctenos
            </LinkBtm>
          </div>
        </div>
      </Container>
    </Section>
  );
}
