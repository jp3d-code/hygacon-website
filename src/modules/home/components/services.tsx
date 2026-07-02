import { MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Container,
  Section,
  SectionDescription,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import services from "@/shared/data/services";

export function Services() {
  return (
    <Section id={routes.home.sections.servicios.id} className="bg-muted">
      <Container>
        <SectionHeader>
          <SectionOverline>Lo que hacemos</SectionOverline>
          <SectionTitle first="Nuestros" second="Servicios" />
          <SectionDescription>
            Ofrecemos soluciones técnicas integrales desde el diseño hasta la
            entrega del proyecto.
          </SectionDescription>
        </SectionHeader>
        <div className="grid w-full items-start justify-center gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative flex h-full flex-col items-start justify-start gap-6 rounded-lg border border-border bg-background p-8 shadow-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary/50 hover:drop-shadow-xl"
            >
              <div className="aspect-square rounded-md bg-accent p-3 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-100/60">
                <service.icon className="h-full w-full text-secondary transition-colors duration-300 group-hover:text-primary" />
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <span className="font-bold text-secondary text-xl uppercase">
                  {service.name}
                </span>
                <span className="text-secondary/70 text-sm">
                  {service.excerpt}
                </span>
              </div>
              <Link
                href={
                  routes.servicios.sectionOrder[index]?.path ??
                  routes.servicios.path
                }
                className="flex items-center gap-2 text-secondary transition-all duration-300 hover:translate-x-1 hover:text-primary"
              >
                <span className="font-medium text-xs uppercase tracking-wider">
                  Ver más
                </span>
                <MoveRight className="" size={15} />
              </Link>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-[width] duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
