import ChooseUs from "./components/ChooseUs";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import PlanTrip from "./components/PlanTrip";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <PlanTrip />
      <ChooseUs />
      <Testimonials />
      <Faq />
    </>
  );
}
