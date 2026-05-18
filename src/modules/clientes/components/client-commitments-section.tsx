import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { clientCommitments } from "@/shared/data/clients";

export function ClientCommitmentsSection() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeader>
          <SectionOverline>Compromiso con el cliente</SectionOverline>
          <SectionTitle first="Nuestra" second="Promesa" />
        </SectionHeader>

        <div className="grid w-full gap-6 md:grid-cols-2">
          {clientCommitments.map((commitment) => (
            <div
              key={commitment.title}
              className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="font-bold font-condensed text-base text-secondary uppercase tracking-wide">
                {commitment.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
