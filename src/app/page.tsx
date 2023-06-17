import ChooseUs from "./components/ChooseUs";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { PageWrapper } from "./components/PageWrapper";
import PlanTrip from "./components/PlanTrip";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
        <PlanTrip />
        <ChooseUs />
        <Testimonials />
        <Faq />
      </PageWrapper>
    </>
  );
}
