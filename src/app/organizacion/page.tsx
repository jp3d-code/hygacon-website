import { AboutSection } from "@/modules/organizacion/components/about-section";
import { CorporateValuesSection } from "@/modules/organizacion/components/corporate-values-section";
import { HistorySection } from "@/modules/organizacion/components/history-section";
import { IdentitySection } from "@/modules/organizacion/components/identity-section";
import { ManagementSystemSection } from "@/modules/organizacion/components/management-system-section";
import { OrgStatistics } from "@/modules/organizacion/components/org-statistics";
import { TeamSection } from "@/modules/organizacion/components/team-section";
import { WelcomeSection } from "@/modules/organizacion/components/welcome";

export default function OrganizacionPage() {
  return (
    <>
      <WelcomeSection />
      <AboutSection />
      <IdentitySection />
      <HistorySection />
      <OrgStatistics />
      <TeamSection />
      <CorporateValuesSection />
      <ManagementSystemSection />
    </>
  );
}
