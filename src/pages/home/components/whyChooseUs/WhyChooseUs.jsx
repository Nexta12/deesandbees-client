import { FaHandsHelping, FaLightbulb, FaHeart } from "react-icons/fa";
import styles from "./whyChooseUs.module.scss";

const WhyChooseUs = () => (
  <section className={styles.whySection}>
    <h2>Why Students Choose Us</h2>
    <div className={styles.cards}>
      <div data-aos="fade-up">
        <FaHandsHelping />
        <h4>Trusted Guidance</h4>
        <p>We provide honest, reliable advice backed by global expertise.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="150">
        <FaLightbulb />
        <h4>Innovation</h4>
        <p>We embrace creative and tech-driven solutions for success.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <FaHeart />
        <h4>Student-Centered</h4>
        <p>Every decision we make prioritizes student growth and wellbeing.</p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
