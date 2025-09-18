import HeroSection from "@/pages/services/components/herosection";
import CoreServices from "@/pages/services/components/coreservices";
import TechnologiesSection from "@/pages/services/components/technologies";
import ContactSection from "@/pages/services/components/contact";
import Testimonials from "@/pages/home/components/testimonials";

const Services = () => {
  return (
    <div>
      <HeroSection />
      <CoreServices />
      <Testimonials />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Services;
