import React from "react";
import styles from "./imageModal.module.scss";

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imgSrc} alt="Enlarged view" />
      </div>
    </div>
  );
};

export default ImageModal;
