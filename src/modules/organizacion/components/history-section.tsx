import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { historyEvents } from "@/shared/data/history-events";

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
                  {/* ---- MOBILE: todos a la derecha de la línea izquierda ---- */}
                  {/* ---- DESKTOP: alternado izquierda / derecha ---- */}

                  {/* Punto en la línea */}
                  <div
                    className={[
                      "absolute z-10 h-4 w-4 shrink-0 rounded-full border-2 border-background bg-primary",
                      /* mobile: pegado a la línea izquierda (left-6 centrado = left-6 - 8px) */
                      "top-1 left-4.5",
                      /* desktop: centrado en la línea central */
                      "md:left-1/2 md:-translate-x-1/2",
                    ].join(" ")}
                  />

                  {/* Contenedor de la tarjeta — empuja contenido a la derecha en mobile */}
                  <div
                    className={[
                      "ml-16 w-full md:ml-0",
                      /* desktop: mitad del ancho con offset según lado */
                      isEven
                        ? "md:mr-[calc(50%+2rem)] md:w-[calc(50%-2rem)]"
                        : "md:ml-[calc(50%+2rem)] md:w-[calc(50%-2rem)]",
                    ].join(" ")}
                  >
                    <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                      <span className="font-black text-primary text-xl">
                        {event.year}
                      </span>
                      <h3 className="mt-1 font-bold text-secondary uppercase tracking-wide">
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
