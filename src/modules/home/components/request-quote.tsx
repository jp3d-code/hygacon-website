import { MoveRight } from "lucide-react";
import { LinkBtm } from "@/shared/components/ui/link";
import { Container, Section } from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";

export function RequestQuote() {
  return (
    <Section className="bg-secondary">
      <Container className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="flex gap-2 font-black text-4xl uppercase">
            <span className="text-secondary-foreground">¿Tienes un</span>
            <span className="text-primary">proyecto</span>
            <span className="text-secondary-foreground">en mente?</span>
          </h2>
          <p className="text-accent/55">
            Contáctanos y recibe una consulta sin compromiso de nuestros
            expertos.
          </p>
        </div>
        <LinkBtm
          variant="default"
          size={"lg"}
          href={routes.contacto.path}
          className="group flex flex-row gap-2 text-sm uppercase transition-transform duration-300 hover:-translate-y-1"
        >
          <span>Solicitar Cotización</span>
          <MoveRight
            className="text-primary-foreground transition-transform duration-300 group-hover:translate-x-1"
            size={15}
          />
        </LinkBtm>
      </Container>
    </Section>
  );
}
