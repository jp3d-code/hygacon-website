import type { Metadata } from "next";
import { AboutSection } from "@/modules/organizacion/components/about-section";
import { AssociatedCompaniesSection } from "@/modules/organizacion/components/associated-companies-section";
import { CorporateValuesSection } from "@/modules/organizacion/components/corporate-values-section";
import { HistorySection } from "@/modules/organizacion/components/history-section";
import { IdentitySection } from "@/modules/organizacion/components/identity-section";
import { ManagementSystemSection } from "@/modules/organizacion/components/management-system-section";
import { OrgStatistics } from "@/modules/organizacion/components/org-statistics";
import { TeamSection } from "@/modules/organizacion/components/team-section";
import { WelcomeSection } from "@/modules/organizacion/components/welcome";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";

export const metadata: Metadata = {
  title: routes.organizacion.name,
};

export default function OrganizacionPage() {
  return (
    <>
      <PageTitle title={routes.organizacion.name} />
      <WelcomeSection />
      <AboutSection />
      <IdentitySection />
      <HistorySection />
      <OrgStatistics />
      <TeamSection />
      <CorporateValuesSection />
      <AssociatedCompaniesSection />
      <ManagementSystemSection />
    </>
  );
}
