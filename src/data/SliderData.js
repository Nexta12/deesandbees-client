
import Slider1 from "@assets/img/sliders/s1.jpg"
import Slider2 from "@assets/img/sliders/s2.jpg"
import Slider3 from "@assets/img/sliders/s3.jpg"
import { paths } from "@routes/path";

export const HeroSliderData = [
  {
    id: "1",
    middleText: "Your Global Study Journey Starts Here",
    bottomText:
      "Connect with top universities in the UK, US, Canada, Europe, and Australia.",
    buttonText: "Start Your Journey",
    buttonLink: paths.services,
    slideImage: Slider1,
  },
  {
    id: "2",
    middleText: "Turning Study Dreams Into Global Success",
    bottomText:
      "From counseling to visa support — we make your study abroad process seamless.",
    buttonText: "Explore Our Services",
    buttonLink: paths.services,
    slideImage: Slider2,
  },
  {
    id: "3",
    middleText: "Learn Without Limits, Grow Without Borders",
    bottomText:
      "Join thousands of students achieving success through Dees & Bees Global.",
    buttonText: "Discover Opportunities",
    buttonLink: paths.aboutUs,
    slideImage: Slider3,
  },
];


