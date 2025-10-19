
import styles from "./enhancedInput.module.scss";

const EnhancedInput = ({ label, name, value, onChange, type = "text", placeholder, required = false, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={name}>{label}{required && <span>*</span>}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </div>
  );
};

export default EnhancedInput;
