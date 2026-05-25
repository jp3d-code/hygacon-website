import config from "@payload-config";
import type { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";
import { ProjectsPage } from "@/modules/proyectos/components/projects-page";
import type { Project } from "@/payload-types";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";

export const metadata: Metadata = {
  title: routes.proyectos.name,
};

async function getProjects(): Promise<Project[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    depth: 1,
    sort: "-year",
  });

  return docs;
}

export default async function ProyectosPage() {
  const projects = await getProjects();

  return (
    <>
      <PageTitle title={routes.proyectos.name} />
      <Suspense fallback={null}>
        <ProjectsPage projects={projects} />
      </Suspense>
    </>
  );
}
