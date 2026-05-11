import { LinkBtm } from "@/shared/components/ui/link";
import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";

export function AboutSection() {
  return (
    <Section>
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <img
          src="https://www.hlcsac.com/images/quienes-somos.jpg"
          alt="25 Años construyendo el Perú"
          className="w-full rounded-xl object-cover"
        />

        {/* Columna contenido */}
        <div className="flex w-full flex-col gap-6">
          <SectionHeader className="items-start">
            <SectionOverline>Quiénes somos</SectionOverline>
            <SectionTitle
              first="25 Años construyendo"
              second="el Perú"
              className="justify-start"
            />
          </SectionHeader>

          <p className="text-muted-foreground text-sm leading-relaxed">
            En el año 2000, el Ing. Manuel Ortega Rubín decide emprender en el
            proyecto más importante de vida y fundó la empresa HLC. Actualmente,
            es la empresa peruana que brinda soluciones integrales a sus
            clientes abarcando Estudios Metalúrgicos, Desarrollo de Estudios e
            Ingeniería, Suministro y Fabricación de Estructuras Metalmecánicas,
            así como Equipos Especiales, Construcción y Puesta en Marcha para
            Proyectos Tipo EPC, para los sectores minero-metalúrgicos, oil &amp;
            gas e industrial. HLC cuenta con oficinas comerciales en Chile,
            Bolivia y Ecuador.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Uno de los principales valores de HLC es la Confianza Depositada de
            nuestros Clientes. Es por ello que a la fecha hemos diseñado y
            ejecutado más de 10 plantas hidrometalúrgicas, 07 plantas de
            tratamiento de aguas, 06 talleres de mantenimiento de camiones,
            entre otros. Lo más importante en HLC es su capital humano, en el
            cual cuenta la experiencia, prestigio y compromiso.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <LinkBtm
              href={routes.proyectos.path}
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
