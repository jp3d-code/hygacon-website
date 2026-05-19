import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import { associatedCompanies } from "@/shared/data/associated-companies";

export function AssociatedCompaniesSection() {
  return (
    <Section
      id={routes.organizacion.sections.empresasAsociadas.id}
      className="bg-muted"
    >
      <Container>
        <SectionHeader>
          <SectionOverline>Alianzas estratégicas</SectionOverline>
          <SectionTitle first="Empresas" second="Asociadas" />
        </SectionHeader>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {associatedCompanies.map((company) => (
            <div
              key={company.name}
              className="group flex h-full flex-col gap-4 rounded-lg border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-bold font-condensed text-lg text-secondary uppercase tracking-wide">
                  {company.name}
                </h3>
                <div className="w h-0.75 w-16 rounded-full bg-primary transition-[width] group-hover:w-24" />
              </div>
              <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                <p>
                  <span className="font-semibold text-secondary">
                    Creación:
                  </span>{" "}
                  {company.createdAt}
                </p>
                <p>
                  <span className="font-semibold text-secondary">
                    Registro:
                  </span>{" "}
                  {company.registration}
                </p>
                <p>
                  <span className="font-semibold text-secondary">
                    Objetivo:
                  </span>{" "}
                  {company.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
