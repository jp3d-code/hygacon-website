import { ExternalLink, User, Users } from "lucide-react";
import { LinkBtm } from "@/shared/components/ui/link";
import {
  Container,
  Section,
  SectionDescription,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";

const data = [
  {
    icon: User,
    name: "Clientes",
    description:
      "¿Tienes una consulta, reclamo o sugerencia sobre nuestros servicios? Completa el formulario y un representante te contactará.",
    link: "https://forms.office.com/r/SbjuZMUqTn",
  },
  {
    icon: Users,
    name: "Colaboradores",
    description:
      "¿Formas parte del equipo HLC y necesitas reportar algo o gestionar una solicitud interna? Usa el canal exclusivo para colaboradores.",
    link: "https://forms.office.com/r/SbjuZMUqTn",
  },
];

export function Help() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionOverline>Estamos para ayudarte</SectionOverline>
          <SectionTitle first="¿Cómo podemos atenderte?"></SectionTitle>
          <SectionDescription>
            Selecciona el canal que corresponde a tu perfil. Nuestro equipo
            revisará tu solicitud y te dará respuesta a la brevedad posible.
          </SectionDescription>
        </SectionHeader>
        <div className="grid w-full max-w-3xl gap-10 md:grid-cols-2">
          {data.map((d) => (
            <div
              className="rounded-xl bg-primary pt-1 drop-shadow-2xl"
              key={d.name}
            >
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-background px-10 py-10">
                <div className="flex aspect-square items-center justify-center rounded-full bg-accent p-5">
                  <d.icon className="size-9 text-secondary" />
                </div>
                <h2 className="font-condensed font-extrabold text-2xl text-secondary uppercase">
                  {d.name}
                </h2>
                <p className="text-center text-muted-foreground text-sm">
                  {d.description}
                </p>
                <LinkBtm href={d.link} size={"lg"} className="gap-3 uppercase">
                  <span>Ir al formulario</span>
                  <ExternalLink />
                </LinkBtm>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
