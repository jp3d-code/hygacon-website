"use client";

import { ProjectCard } from "@/modules/proyectos/components/projects-card";
import type { Project } from "@/payload-types";
import { Container, Section } from "@/shared/components/ui/section";

type Props = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: Props) {
  return (
    <Section>
      <Container className="gap-10" animation={false}>
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={project.id} i={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
