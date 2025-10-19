import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitter } from "react-icons/bs"
import styles from "./expertcard.module.scss"
import { GiQueenCrown } from "react-icons/gi";

const ExpertCard = ({ exertImg, expertName, buttonText, description, isFeatured, className }) => {
  return (
    <div className={`${isFeatured ? styles.singleCardFeaured : styles.singleCard} ${className}`} >
        <img src={exertImg} alt="staff" />

         <div className={`${isFeatured ? styles.titleBoxFeatured : styles.titleBox}`}>
           {isFeatured && (

            <div className={styles.weekBest}>
             <GiQueenCrown />
             <div>Best employee of the week</div>
            </div>
           )}
            <p>{expertName}</p>
            <span>{buttonText}</span>
         </div>

        <small>{description}</small>

        <div className={styles.icons}>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsTiktok/>
            <BsLinkedin/>
        </div>
    </div>
  )
}

export default ExpertCard