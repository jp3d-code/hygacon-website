import { Sectors } from "@/modules/home/components/sectors";
import { Services } from "@/modules/home/components/services";
import { Statistics } from "@/modules/home/components/statistics";
import { WhyUs } from "@/modules/home/components/why-us";

export default function Home() {
  return (
    <>
      <Sectors />
      <Services />
      <WhyUs />
      <Statistics />
    </>
  );
}
