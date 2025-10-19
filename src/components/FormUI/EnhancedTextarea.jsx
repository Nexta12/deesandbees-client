
import styles from "./EnhancedTextarea.module.scss";

const EnhancedTextarea = ({ label, name, value, onChange, placeholder, required = false, rows = 5, ...rest }) => {
  return (
    <div className={styles.textareaWrapper}>
      {label && <label htmlFor={name}>{label}{required && <span>*</span>}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        {...rest}
      />
    </div>
  );
};

export default EnhancedTextarea;
