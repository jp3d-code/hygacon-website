import type { Metadata } from "next";
import { ServiceDetail } from "@/modules/servicios/components/service-detail";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";
import services from "@/shared/data/services";

export const metadata: Metadata = {
  title: routes.servicios.name,
};

export default function ServiciosPage() {
  return (
    <>
      <PageTitle title={routes.servicios.name} />
      {services.map(({ icon, ...service }, i) => (
        <ServiceDetail key={service.name} service={service} index={i} />
      ))}
    </>
  );
}
