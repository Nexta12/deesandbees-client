import SubTitle from "@components/subTitle/SubTitle";
import styles from "./cta.module.scss";
import LogoWhite from "@assets/img/LogoWhite.png";
import Button from "@components/button/Button";

const Cta = ({ bgImg, mainText, subTitleText, btnText, onClick }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.ctaWrapper}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
          width: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={LogoWhite} className={styles.logo} alt="logo" />
        <SubTitle className={styles.mainText}>{mainText}</SubTitle>
        <small>{subTitleText}</small>
        <Button onClick={onClick} >{btnText}</Button>
      </div>
    </div>
  );
};

export default Cta;
