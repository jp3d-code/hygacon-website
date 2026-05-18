import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { team } from "@/shared/data/team";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamSection() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionOverline>Las personas detrás de HYGACON</SectionOverline>
          <SectionTitle first="Nuestro" second="Equipo" />
        </SectionHeader>

        <div className="grid w-full grid-cols-2 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-secondary font-bold text-2xl text-secondary-foreground">
                    {getInitials(member.name)}
                  </div>
                )}
              </div>

              <h3 className="font-bold text-secondary text-sm leading-tight">
                {member.name}
              </h3>
              <p className="font-medium text-primary text-xs uppercase tracking-wide">
                {member.role}
              </p>
              {member.bio && (
                <p className="line-clamp-2 text-muted-foreground text-xs leading-relaxed">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
