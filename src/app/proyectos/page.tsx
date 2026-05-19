import { Suspense } from "react";
import type { Metadata } from "next";
import { ProjectsPage } from "@/modules/proyectos/components/projects-page";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";

export const metadata: Metadata = {
  title: routes.proyectos.name,
};

export default function ProyectosPage() {
  return (
    <>
      <PageTitle title={routes.proyectos.name} />
      <Suspense fallback={null}>
        <ProjectsPage />
      </Suspense>
    </>
  );
}
