import { motion as Motion } from "framer-motion";
import styles from "./herosection.module.scss"
import Button from "@components/button/Button";

const HeroSection = ({
  smallTitle,
  title,
  description,
  buttonText,
  onButtonClick,
  bgImg,
  align = "center",
  darkOverlay = true,
  animate = true,
  className = "",
}) => {
  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className={`${styles.overlay} ${
          darkOverlay ? styles.dark : styles.light
        }`}
      ></div>

      <div
        className={`${styles.content} ${
          align === "left"
            ? styles.left
            : align === "right"
            ? styles.right
            : styles.center
        }`}
      >
        {smallTitle && (
          <Motion.p
            className={styles.smallTitle}
            initial={animate ? { opacity: 0, y: -15 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.6 }}
          >
            {smallTitle}
          </Motion.p>
        )}

        {title && (
          <Motion.h1
            className={styles.title}
            initial={animate ? { opacity: 0, y: 15 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title}
          </Motion.h1>
        )}

        {description && (
          <Motion.p
            className={styles.description}
            initial={animate ? { opacity: 0, y: 10 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {description}
          </Motion.p>
        )}

        {buttonText && (
          <Motion.div
            initial={animate ? { opacity: 0, y: 10 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button onClick={onButtonClick}>{buttonText}</Button>
          </Motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
