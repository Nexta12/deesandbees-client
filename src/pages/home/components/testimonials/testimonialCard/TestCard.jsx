
import styles from "./testCard.module.scss";

const TestCard = ({ description, userName }) => {
  return (
    <div className={styles.SingleTestCard} data-aos="fade-up" >
      <small>{description}</small>

      <div className={styles.userNameContainer}>
        <p>{userName}</p>
      </div>
    </div>
  );
};

export default TestCard;
