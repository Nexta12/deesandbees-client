import SubTitle from "@components/subTitle/SubTitle";
import styles from "./singleMenu.module.scss";
import { useState } from "react";
import ImageModal from "@components/imageModal/ImageModal";
import { useNavigate } from "react-router-dom";

const SingleMenuCard = ({ title, description, price, menuImg, path }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleOnclick = () =>{
   return navigate(path);
  }
    
  return (
    <>
    <div className={styles.cardContainer}>
     
        
      <div className={styles.textContent} onClick={handleOnclick} >
        <SubTitle className={styles.menuTitle} >{title}</SubTitle>
        <small>{description}</small>
        <SubTitle className={styles.price} >{price}</SubTitle>
      </div>
  

      <div className={styles.imgWrapper} onClick={() => setIsModalOpen(true)} >
        <img src={menuImg} alt="menu" />
      </div>
    </div>
     <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imgSrc={menuImg}
      />
    </>
  );
};

export default SingleMenuCard;
