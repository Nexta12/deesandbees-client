import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children, showClose = true, backdropClose = true }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // prevent background scroll
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && backdropClose) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {showClose && (
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
