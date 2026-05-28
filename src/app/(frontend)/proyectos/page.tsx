import config from "@payload-config";
import type { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";
import { ProjectsFilter } from "@/modules/proyectos/components/projects-filter";
import { ProjectsGrid } from "@/modules/proyectos/components/projects-grid";
import { PageTitle } from "@/shared/components/ui/page-title";
import { Container, Section } from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import { manageSearchParams, resolveEquals } from "@/shared/lib/search-params";

export const metadata: Metadata = {
  title: routes.proyectos.name,
};

type SearchParams = Promise<{
  query?: string;
  sector?: string;
  serviceArea?: string;
  status?: string;
  client?: string;
}>;

async function getProjects(searchParams: Awaited<SearchParams>) {
  const payload = await getPayload({ config });

  const where = manageSearchParams(searchParams, {
    query: {
      key: "query",
      fields: ["name", "client", "location"],
    },
    filters: [
      { key: "sector", resolve: resolveEquals() },
      { key: "serviceArea", resolve: resolveEquals() },
      { key: "status", resolve: resolveEquals() },
      { key: "client", resolve: resolveEquals() },
    ],
  });

  const { docs, totalDocs } = await payload.find({
    collection: "projects",
    depth: 1,
    sort: "-year",
    where,
    limit: 100,
  });

  return { projects: docs, totalDocs };
}

async function getProjectFilterOptions() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    depth: 0,
    limit: 0,
    select: {
      client: true,
      sector: true,
      serviceArea: true,
      status: true,
    },
  });

  const clients = Array.from(
    new Set(docs.map((doc) => doc.client).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));

  const sectors = Array.from(
    new Set(docs.map((doc) => doc.sector).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));

  const serviceAreas = Array.from(
    new Set(docs.map((doc) => doc.serviceArea).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));

  const statuses = Array.from(
    new Set(docs.map((doc) => doc.status).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));

  return {
    clients,
    sectors,
    serviceAreas,
    statuses,
  };
}

export default async function ProyectosPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  const [projects, filterOptions] = await Promise.all([
    getProjects(searchParams),
    getProjectFilterOptions(),
  ]);

  return (
    <>
      <PageTitle title={routes.proyectos.name} />
      <Suspense fallback={null}>
        <Section>
          <Container className="gap-10" animation={false}>
            <ProjectsFilter
              totalCount={projects.totalDocs}
              resultCount={projects.projects.length}
              clientOptions={filterOptions.clients}
              sectorOptions={filterOptions.sectors}
              serviceAreaOptions={filterOptions.serviceAreas}
              statusOptions={filterOptions.statuses}
            />
            <ProjectsGrid projects={projects.projects} />
          </Container>
        </Section>
      </Suspense>
    </>
  );
}
