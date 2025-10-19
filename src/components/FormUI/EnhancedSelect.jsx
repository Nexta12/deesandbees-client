import styles from "./enhancedSelect.module.scss";

const EnhancedSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  placeholder = "Select an option",
  ...rest
}) => {
  return (
    <div className={styles.selectWrapper}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EnhancedSelect;
