

import React from "react";
import Slider from "react-slick";
import styles from "./heroslider.module.scss";
import { HeroSliderData } from "@data/SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  };

  return (
    <div className={styles.heroContainer}>
      <Slider {...settings}>
        {HeroSliderData.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <div
              className={styles.slideBg}
              style={{ backgroundImage: `url(${slide.slideImage})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.textBlock} data-aos="fade-up">
                <h1>{slide.middleText}</h1>
                <p>{slide.bottomText}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;

