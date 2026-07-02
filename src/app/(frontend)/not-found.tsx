import Link from "next/link";
import { LinkBtm } from "@/shared/components/ui/link";
import { Container, Section } from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";

export default function NotFound() {
  return (
    <Section className="bg-muted/30">
      <Container
        className="flex min-h-[50vh] max-w-3xl flex-col items-start gap-6"
        animation={false}
      >
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          Error 404
        </span>
        <div className="flex flex-col gap-2">
          <span className="font-condensed font-extrabold text-9xl text-secondary leading-none">
            404
          </span>
          <h1 className="font-condensed font-extrabold text-4xl text-secondary uppercase">
            Pagina no encontrada
          </h1>
          <p className="text-lg text-muted-foreground">
            La ruta que buscas no existe o fue movida. Te dejamos enlaces utiles
            para continuar.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkBtm variant="default" size="lg" href={routes.path}>
            Volver al inicio
          </LinkBtm>
          <LinkBtm variant="outline" size="lg" href={routes.articulos.path}>
            Ver articulos
          </LinkBtm>
        </div>
        <p className="text-muted-foreground text-xs uppercase tracking-widest">
          ¿Necesitas ayuda?{" "}
          <Link
            href={routes.contacto.path}
            className="text-primary underline-offset-4 hover:underline"
          >
            Contactenos
          </Link>
        </p>
      </Container>
    </Section>
  );
}
