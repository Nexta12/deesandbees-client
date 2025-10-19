// import BriefIntroSection from "./components/briefIntro/BriefIntroSection"
// import HeroSlider from "./components/heroSlider/HeroSlider"
// import Services from "./components/ourServices/Services"
// import Testimonials from "./components/testimonials/Testimonials"


// const Homepage = () => {
//   return (
//     <>
//      <HeroSlider/>
//      <BriefIntroSection/>
//      <Services/> 
//      <Testimonials/>

   
//     </>
//   )
// }

// export default Homepage

import HeroSlider from "./components/heroSlider/HeroSlider";
import BriefIntroSection from "./components/briefIntro/BriefIntroSection";
import ServicesShowcase from "./components/ourServices/ServicesShowcase";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import Testimonials from "./components/testimonials/Testimonials";
import FinalCTA from "./components/finalCTA/FinalCTA";
import FAQs from "./components/faq/Faqs";

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
