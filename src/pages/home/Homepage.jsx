
import BriefIntroSection from "./components/briefIntro/BriefIntroSection";
import FAQs from "./components/faq/Faqs";
import HeroSlider from "./components/heroSlider/HeroSlider";
import ServicesShowcase from "./components/ourServices/ServicesShowcase";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import FinalCTA from "./components/finalCta/FinalCta";
import Testimonials from "./components/testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <HeroSlider />
      <BriefIntroSection />
      <ServicesShowcase />
      <WhyChooseUs />
      <FAQs/>
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Homepage;
