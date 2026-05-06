import {
  Container,
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/shared/components/ui/section";
import services from "@/shared/data/services";

export function Services() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeader>
          <SectionSubtitle>Lo que hacemos</SectionSubtitle>
          <SectionTitle first="Nuestros" second="Servicios" />
        </SectionHeader>
        <div className="grid w-full items-start justify-center gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="group group-hover:translatey-1 relative flex flex-col items-start justify-start gap-6 rounded-lg border-border bg-background p-8 transition-all duration-150 ease-in-out group-hover:border-primary group-hover:shadow-lg"
            >
              <div className="aspect-square rounded-md bg-accent p-3">
                <service.icon className="h-full w-full text-secondary" />
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="font-bold text-secondary text-xl uppercase">
                  {service.name}
                </span>
                <span className="text-secondary/70 text-sm">
                  {service.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
