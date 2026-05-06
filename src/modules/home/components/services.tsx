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
    <Section>
      <Container>
        <SectionHeader>
          <SectionSubtitle>Lo que hacemos</SectionSubtitle>
          <SectionTitle first="Nuestros" second="Servicios" />
        </SectionHeader>
        <div className="grid w-full items-center justify-center gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="group group-hover:translatey-1 relative flex flex-col items-start justify-start gap-5 rounded-lg border-border p-10 transition-all duration-150 ease-in-out group-hover:border-primary group-hover:shadow-lg"
            >
              <div className="aspect-square">
                
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
