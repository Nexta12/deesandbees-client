import SubTitle from "@components/subTitle/SubTitle"
import styles from "./testimonial.module.scss"
import HeadingText from "@components/headingText/HeadingText"
import TestCard from "./testimonialCard/TestCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";

const Testimonials = () => {

  const [testData, setTestData] = useState([]);

  useEffect(()=>{
     const fetchTestimonials = async () =>{

      try {

        const res = await apiClient.get(endpoints.fetchTestimonials);

        setTestData(res.data.data)
        
      } catch (error) {
        toast.error(ErrorFormatter(error))
      }
     }

     fetchTestimonials()

  },[]);



  const settings = {
  dots: true,
  speed: 2000,
  arrows: false,
  infinite: testData.length > 2,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
 
  return (
    <div className={styles.container} data-aos="fade-up" >
          <div className={styles.textContent}>
             <SubTitle font="script" >What People Say</SubTitle>
             <HeadingText>Testimonials</HeadingText>
              {/* <small>Real stories from happy clients who have tasted our food, booked our halls, and celebrated with us. <br/> See why they love Happies!</small> */}
          </div>
      

          <div className={styles.cardContent}>
            <Slider {...settings} >
            {testData.map((item)=>(
               <TestCard key={item.id} description={item.message} userName={item.fullName} />
            ))}
            </Slider>
          </div>
    </div>
  )
}

export default Testimonials


