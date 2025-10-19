
import styles from "./briefIntro.module.scss";
import introImg from "@assets/img/sliders/a1.jpg";

const BriefIntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.imageBox}>
        <img src={introImg} alt="Dees and Bees" />
      </div>
      <div className={styles.textBox} data-aos="fade-left">
        <h5 >Who We Are</h5>
        <h2>Dees and Bees Global</h2>
        <p>
          Empowering minds and connecting futures — at Dees & Bees Global, we guide ambitious students toward world-class education opportunities across the UK, Europe, the US, Canada, and Australia. With integrity, innovation, and personalized care, we simplify the path to global learning and lifelong success.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default BriefIntroSection;
