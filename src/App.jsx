import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LogoMarquee from "./components/LogoMarquee/LogoMarquee";
import Features from "./components/Features/Features";
import Steps from "./components/Steps/Steps";
import Showcase from "./components/Showcase/Showcase";
import Benefits from "./components/Benefits/Benefits";
import ContentSlider from "./components/ContentSlider/ContentSlider";
import Integrations from "./components/Integrations/Integrations";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  );
}
