import { Counter } from "@/shared/components/ui/counter";
import { Container, Section } from "@/shared/components/ui/section";
import orgStatistics from "@/shared/data/org-statistics";

export function OrgStatistics() {
  return (
    <Section className="relative pb-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://www.hlcsac.com/images/hero-5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <Container className="z-10">
        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-4">
          {orgStatistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="font-black text-5xl text-primary md:text-7xl">
                <Counter finalNumber={stat.num} />
              </div>
              <span className="font-bold text-secondary-foreground text-sm uppercase tracking-widest">
                {stat.label}
              </span>
              <div className="mx-auto h-0.75 w-8 rounded-full bg-primary" />
              <p className="max-w-40 text-secondary-foreground/70 text-xs">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
