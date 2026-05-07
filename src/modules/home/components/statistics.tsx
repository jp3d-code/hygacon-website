import { Counter } from "@/shared/components/ui/counter";
import { Container, Section } from "@/shared/components/ui/section";
import statistics from "@/shared/data/statistics";

export function Statistics() {
  return (
    <Section className="relative pb-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://www.hlcsac.com/images/hero-5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply brightness-80 backdrop-blur-[3px]" />
      </div>

      <Container className="z-10">
        <div className="grid grid-cols-2 items-center justify-center gap-8 text-center md:grid-cols-4">
          {statistics.map((stat, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="mb-2 flex items-baseline font-black text-5xl text-primary tracking-tighter md:text-6xl lg:text-7xl">
                {stat.prefix && <span>{stat.prefix}</span>}
                <Counter finalNumber={stat.number} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="mb-4 h-1 w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
              <span className="font-bold text-secondary-foreground text-sm uppercase tracking-widest opacity-90 md:text-base">
                {stat.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
