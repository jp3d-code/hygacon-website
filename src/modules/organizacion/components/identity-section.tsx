import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { identity } from "@/shared/data/identity";
import type { IdentityItemList } from "@/shared/types/data";

export function IdentitySection() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionOverline>Nuestra identidad</SectionOverline>
          <SectionTitle first="Misión, Visión y" second="Valores" />
        </SectionHeader>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {identity.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-border bg-background p-8 shadow-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-primary"></div>
              <h3 className="font-bold text-lg text-secondary uppercase tracking-wide">
                {item.title}
              </h3>

              {"content" in item ? (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.content}
                </p>
              ) : (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {(item as IdentityItemList).items.join(" · ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
