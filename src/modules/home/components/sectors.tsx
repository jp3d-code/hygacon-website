import {
  Container,
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/shared/components/ui/section";
import sectors from "@/shared/data/sectors";

export function Sectors() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionSubtitle>Áreas de especialización</SectionSubtitle>
          <SectionTitle first="Nuestros" second="Sectores" />
        </SectionHeader>
        <div className="grid w-full items-center justify-center gap-6 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="group relative flex aspect-9/13 w-full max-w-md flex-col items-start justify-end gap-4 rounded-lg p-8 transition-all duration-150 ease-in-out"
            >
              <div
                className="absolute inset-0 -z-20 rounded-lg bg-center bg-cover"
                style={{
                  backgroundImage: `url(${sector.img})`,
                }}
              />
              <div className="absolute inset-0 -z-10 rounded-lg bg-linear-to-t from-black/90 to-black/20 transition-opacity duration-300"></div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="text-primary text-sm uppercase tracking-widest">
                  Especialización
                </span>
                <span className="font-bold text-3xl text-white uppercase">
                  {sector.name}
                </span>
              </div>
              <div className="h-0.75 w-10 rounded-full bg-primary transition-[width] group-hover:w-20"></div>
              <span className="text-accent/90 text-sm">
                {sector.description}
              </span>
              <span className="text-primary text-sm uppercase tracking-widest">
                Ver mas
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
