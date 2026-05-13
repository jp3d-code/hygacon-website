import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { historyEvents } from "@/shared/data/history-events";
import { cn } from "@/shared/lib/utils";

export function HistorySection() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeader>
          <SectionOverline>Nuestra trayectoria</SectionOverline>
          <SectionTitle first="Historia de" second="HLC" />
        </SectionHeader>

        {/* Timeline wrapper */}
        <div className="relative w-full max-w-6xl">
          {/* Línea vertical — izquierda en mobile, centro en md+ */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {historyEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={event.year} className="relative flex items-start">
                  <div className="absolute top-1 left-4.5 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <div
                    className={cn(
                      "ml-16 w-full md:ml-0",
                      isEven
                        ? "md:mr-[calc(50%+2rem)] md:w-[calc(50%-2rem)]"
                        : "md:ml-[calc(50%+2rem)] md:w-[calc(50%-2rem)]",
                    )}
                  >
                    <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                      <span className="font-black font-condensed text-primary text-xl">
                        {event.year}
                      </span>
                      <h3 className="mt-1 font-bold font-condensed text-secondary uppercase tracking-wide">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
