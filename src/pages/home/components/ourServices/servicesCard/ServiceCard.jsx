import Button from "@components/button/Button";
import styles from "./servicesCards.module.scss";

const ServiceCard = ({
  topButtonText,
  bodyText,
  footerButtonText,
  bgImg,
  onClick,
  className,
}) => {
  return (
    <div className={`${styles.servicesCardContainer} ${className || ""}`}>
      <Button variant="orange" className={styles.orangeButton}>
        {topButtonText}
      </Button>
      <div
        className={styles.bgBody}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {bodyText}
      </div>
      <Button onClick={onClick} className={styles.footerBotton}>{footerButtonText}</Button>
    </div>
  );
};

export default ServiceCard;
