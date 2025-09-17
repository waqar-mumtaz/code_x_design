import Banner from "./components/banner";
import Services from "./components/services";
import Achievements from "./components/achievements";
import Experience from "./components/experience";
import OurWorks from "./components/our-works";
import WorkingProcess from "./components/working-process";
import Faqs from "./components/faqs";
import Testimonials from "./components/testimonials";
import ContactForm from "./components/contact-form";
const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Achievements />
      <Experience />
      <OurWorks />
      <WorkingProcess />
      <Faqs />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
