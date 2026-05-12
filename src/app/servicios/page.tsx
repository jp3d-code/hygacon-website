import { ServiceDetail } from "@/modules/servicios/components/service-detail";
import services from "@/shared/data/services";

export default function ServiciosPage() {
  return (
    <>
      {services.map(({ icon, ...service }, i) => (
        <ServiceDetail key={service.name} service={service} index={i} />
      ))}
    </>
  );
}
