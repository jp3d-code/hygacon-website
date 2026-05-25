"use client";

import { ProjectCard } from "@/modules/proyectos/components/projects-card";
import { ProjectsFilter } from "@/modules/proyectos/components/projects-filter";
import { useProjects } from "@/modules/proyectos/hooks/use-projects";
import type { Project } from "@/payload-types";
import { Container, Section } from "@/shared/components/ui/section";

type Props = {
  projects: Project[];
};

export function ProjectsPage({ projects }: Props) {
  const {
    clientOptions,
    filters,
    filteredProjects,
    resetFilters,
    resultCount,
    setFilters,
    totalCount,
  } = useProjects(projects);

  return (
    <Section>
      <Container className="gap-10" animation={false}>
        <ProjectsFilter
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          totalCount={totalCount}
          resultCount={resultCount}
          clientOptions={clientOptions}
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <ProjectCard project={project} key={project.id} i={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
