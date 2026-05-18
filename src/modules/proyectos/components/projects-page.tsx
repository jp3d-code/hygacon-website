"use client";

import { useMemo, useState } from "react";
import { ProjectsFilter } from "@/modules/proyectos/components/projects-filter";
import { ProjectsGrid } from "@/modules/proyectos/components/projects-grid";
import { Container, Section } from "@/shared/components/ui/section";
import { projects } from "@/shared/data/projects";

const initialFilters = {
  query: "",
  sector: "Todos",
  serviceArea: "Todos",
  status: "Todos",
  client: "Todos los clientes",
};

export function ProjectsPage() {
  const [filters, setFilters] = useState(initialFilters);

  const clients = useMemo(
    () => Array.from(new Set(projects.map((project) => project.client))),
    [],
  );

  const filteredProjects = useMemo(() => {
    const query = filters.query.toLowerCase();

    return projects.filter((project) => {
      if (
        query &&
        ![project.name, project.client, project.location]
          .join(" ")
          .toLowerCase()
          .includes(query)
      ) {
        return false;
      }

      if (filters.sector !== "Todos" && project.sector !== filters.sector) {
        return false;
      }

      if (
        filters.serviceArea !== "Todos" &&
        project.serviceArea !== filters.serviceArea
      ) {
        return false;
      }

      if (filters.status !== "Todos" && project.status !== filters.status) {
        return false;
      }

      if (
        filters.client !== "Todos los clientes" &&
        project.client !== filters.client
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <Section>
      <Container className="gap-10">
        <ProjectsFilter
          filters={filters}
          onChange={setFilters}
          onReset={() => setFilters(initialFilters)}
          totalCount={projects.length}
          resultCount={filteredProjects.length}
          clients={clients}
        />
        <ProjectsGrid projects={filteredProjects} />
      </Container>
    </Section>
  );
}
