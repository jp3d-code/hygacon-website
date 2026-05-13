import { LinkBtm } from "@/shared/components/ui/link";
import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";

export function WelcomeSection() {
  return (
    <Section className="bg-secondary">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <img
          src="https://www.hlcsac.com/images/manuel-ortega-retoque.jpg"
          alt="25 Años construyendo el Perú"
          className="aspect-square w-full rounded-xl object-cover object-3/4 object-top"
        />

        {/* Columna contenido */}
        <div className="flex w-full flex-col gap-6">
          <SectionHeader className="items-start">
            <SectionOverline>Quiénes somos</SectionOverline>
            <SectionTitle
              first="25 Años construyendo"
              second="el Perú"
              className="justify-start text-secondary-foreground"
            />
          </SectionHeader>

          <p className="text-muted text-sm leading-relaxed">
            Más de 20 años desarrollando proyectos en el Perú y en el
            extranjero. Líderes brindando soluciones en Ingeniería, Fabricación,
            Procura y Construcción en la ejecución de Proyectos EPC y en Pruebas
            Metalúrgicas.
          </p>

          <p className="text-muted text-sm leading-relaxed">
            Personal altamente capacitado y motivado en la realización de sus
            funciones Comprometidos a desarrollar actividades de manera
            eficiente, eficaz, oportuna y confiable Trabajo en equipo y calidad
            como modelo de excelencia que nos hace una marca líder +2.6 Millones
            de horas hombre trabajadas con factor de accidentabilidad de 0.058
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
