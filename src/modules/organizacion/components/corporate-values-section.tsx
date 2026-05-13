import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import corporateValues from "@/shared/data/corporate-values";

export function CorporateValuesSection() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeader>
          <SectionOverline>Lo que nos guía</SectionOverline>
          <SectionTitle first="Nuestros" second="Valores Corporativos" />
        </SectionHeader>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corporateValues.map((value, index) => (
            <div
              key={index}
              className="group flex flex-col gap-5 rounded-lg border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-bold font-condensed text-lg text-secondary uppercase tracking-wide">
                  {value.title}
                </h3>
                <div className="h-0.75 w-14 rounded-full bg-primary transition-[width] group-hover:w-20" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
