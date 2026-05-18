"use client";

import { useState } from "react";
import { LinkBtm } from "@/shared/components/ui/link";
import {
  Container,
  Section,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";
import type { Service as ServiceType } from "@/shared/types/data";

type ServiceDetailType = Omit<ServiceType, "icon">;

type Props = {
  service: ServiceDetailType;
  index: number;
};

export function ServiceDetail({ service, index }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const reverse = index % 2 === 1;

  return (
    <Section className={reverse ? "bg-muted" : ""}>
      <Container>
        <div
          className={cn("grid items-center gap-20 md:grid-cols-2", {
            "md:": reverse,
          })}
        >
          <img
            src={service.image}
            alt={service.name}
            className="aspect-4/3 w-full rounded-lg object-cover shadow-md transition-all"
          />

          <div className="flex flex-col justify-start gap-6">
            <SectionHeader className="items-start">
              <SectionOverline>Servicio 0{index + 1}</SectionOverline>
              <SectionTitle first={service.name} className="justify-start" />
            </SectionHeader>

            {/* Tabs nav */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {service.categories.map((cat, i) => (
                  <button
                    type="button"
                    key={cat.label}
                    onClick={() => setActiveTab(i)}
                    className={cn(
                      "rounded-full border border-border bg-background px-5 py-2 font-semibold text-secondary/80 text-xs uppercase tracking-wider transition-colors",
                      {
                        "border-secondary bg-secondary text-secondary-foreground":
                          i === activeTab,
                      },
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <ul className="grid grid-cols-2 gap-4 text-sm">
                {service.categories[activeTab]?.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-lg border-primary border-l-3 bg-accent py-3 pl-4 font-light"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-center gap-4">
              <LinkBtm
                href={routes.contacto.path}
                variant="default"
                size="lg"
                className="uppercase"
              >
                Solicitar cotización
              </LinkBtm>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
