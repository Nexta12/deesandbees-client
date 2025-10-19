
import styles from './button.module.scss';

const Button = ({
  children,
  icon = null,
  type = "button",
  iconPosition = 'right',
  className = '',
  variant = '', // 
  ...props
}) => {
  const positionClass =
    icon && iconPosition === 'left' ? styles['icon-left'] : styles['icon-right'];

  const variantClass = variant ? styles[variant] : '';

  return (
    <button type={type} className={`${styles.button} ${positionClass} ${variantClass} ${className}`} {...props}>
      {iconPosition === 'left' && icon && icon}
      {children}
      {iconPosition === 'right' && icon && icon}
    </button>
  );
};


export default Button;
