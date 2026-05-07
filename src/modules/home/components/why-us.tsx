import {
  Container,
  Section,
  SectionDescription,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import values from "@/shared/data/values"; // Asumiendo que guardaste el array ahí

export function WhyUs() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionOverline>Nuestros Valores</SectionOverline>
          <SectionTitle first="¿POR QUÉ" second="HLC?" />
          <SectionDescription>
            Factores que nos diferencian y nos han permitido consolidarnos como
            líderes del sector.
          </SectionDescription>
        </SectionHeader>

        <div className="grid w-full items-start justify-center gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.name}
              className="group flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-4 shadow-sm transition-all duration-300 group-hover:bg-slate-200">
                <value.icon
                  strokeWidth={1.5}
                  className="h-10 w-10 text-secondary transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-lg text-secondary uppercase tracking-tight">
                  {value.name}
                </h3>
                <p className="max-w-75 text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
