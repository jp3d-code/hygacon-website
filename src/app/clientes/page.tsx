import type { Metadata } from "next";
import { ClientCommitmentsSection } from "@/modules/clientes/components/client-commitments-section";
import { ClientsSection } from "@/modules/clientes/components/clients-section";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";

export const metadata: Metadata = {
  title: routes.clientes.name,
};

export default function ClientesPage() {
  return (
    <>
      <PageTitle title={routes.clientes.name} />
      <ClientsSection />
      <ClientCommitmentsSection />
    </>
  );
}
