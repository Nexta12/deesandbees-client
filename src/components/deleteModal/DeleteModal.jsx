import { AiOutlineWarning } from "react-icons/ai";
import styles from "./DeleteModal.module.scss";

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  isDeleting,
  confirmText,
  onAction,
  actTionText,
  isTakingAction,
  confirmTextClass,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-hidden={!isOpen}>
      <div className={styles.modal}>
        <div className={styles.iconBox}>
          <AiOutlineWarning className={styles.icon} />
        </div>

        <h2 className={styles.title}>Are you sure?</h2>
        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <button type="button" onClick={onClose} className={styles.cancelBtn}>
            Cancel
          </button>

          {actTionText && (
            <button
              type="button"
              onClick={onAction}
              className={styles.actionBtn}
              disabled={isTakingAction}
            >
              {isTakingAction ? "Please wait..." : actTionText}
            </button>
          )}

          <button
            type="button"
            onClick={onConfirm}
            className={`${styles.deleteBtn} ${confirmTextClass || ""}`}
            disabled={isDeleting}
          >
            {isDeleting ? "Please wait..." : confirmText || "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
