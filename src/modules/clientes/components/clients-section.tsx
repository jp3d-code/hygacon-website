import {
  Container,
  Section,
  SectionDescription,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { clientGroups } from "@/shared/data/clients";
import { getInitials } from "@/shared/lib/utils";

export function ClientsSection() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionOverline>Nuestros clientes</SectionOverline>
          <SectionTitle first="Confianza" second="Comprobada" />
          <SectionDescription>
            Trabajamos con entidades públicas y privadas, construyendo
            relaciones de largo plazo basadas en resultados.
          </SectionDescription>
        </SectionHeader>

        <div className="grid w-full gap-6 lg:grid-cols-2">
          {clientGroups.map((group) => (
            <div
              key={group.id}
              className="flex h-full flex-col gap-4 rounded-lg border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-bold font-condensed text-lg text-secondary uppercase tracking-wide">
                  {group.title}
                </h3>
                {group.description && (
                  <p className="text-muted-foreground text-sm">
                    {group.description}
                  </p>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((client) => (
                  <div
                    key={client.name}
                    className="flex items-center gap-3 rounded-md border border-border/60 bg-muted/50 px-4 py-3"
                  >
                    <div className="flex aspect-square h-9 w-9 items-center justify-center rounded-full bg-secondary font-bold text-secondary-foreground text-xs">
                      {getInitials(client.name)}
                    </div>
                    <span className="font-medium text-secondary text-sm">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
