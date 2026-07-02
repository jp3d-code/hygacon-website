import type { Metadata } from "next";
import { Help } from "@/modules/atencion/components/help";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";
export const metadata: Metadata = {
  title: routes.atencion.name,
};

export default function AtencionPage() {
  return (
    <>
      <PageTitle title={routes.atencion.name} />
      <Help />
    </>
  );
}
