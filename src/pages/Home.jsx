import Hero from "../components/Hero/Hero";
import LogoMarquee from "../components/LogoMarquee/LogoMarquee";
import Features from "../components/Features/Features";
import Steps from "../components/Steps/Steps";
import Showcase from "../components/Showcase/Showcase";
import Benefits from "../components/Benefits/Benefits";
import ContentSlider from "../components/ContentSlider/ContentSlider";
import Integrations from "../components/Integrations/Integrations";
import Testimonials from "../components/Testimonials/Testimonials";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import FinalCTA from "../components/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Features />
      <Steps />
      <Showcase />
      <Benefits />
      <ContentSlider />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
