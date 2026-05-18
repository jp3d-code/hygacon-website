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

export function AboutSection() {
  return (
    <Section>
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <img
          src={imageSrc(images.c25d5735)}
          alt="Trabajo en equipo en obra"
          className="w-full rounded-xl object-cover"
        />

        {/* Columna contenido */}
        <div className="flex w-full flex-col gap-6">
          <SectionHeader className="items-start">
            <SectionOverline>Quiénes somos</SectionOverline>
            <SectionTitle
              first="Experiencia"
              second="comprobada"
              className="justify-start"
            />
          </SectionHeader>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Consorcio HYGACON brinda soluciones integrales en ingeniería,
            metalmecánica y servicios generales, ejecutando proyectos de
            infraestructura y saneamiento para entidades públicas y privadas.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Nuestra fortaleza es el capital humano y la capacidad operativa que
            nos permite entregar obras seguras, eficientes y con alto impacto
            social en el sur del país.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <LinkBtm
              href={routes.contacto.path}
              variant={"secondary"}
              size={"lg"}
              className="font-semibold uppercase"
            >
              Ver Proyectos
            </LinkBtm>
            <LinkBtm
              href={routes.contacto.path}
              variant={"outline"}
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
