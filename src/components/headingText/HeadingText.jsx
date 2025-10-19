
 import styles from './headingText.module.scss';

const HeadingText = ({ children, className = '' }) => {
  return (
    <h1 className={`${styles.heading} ${className}`}>
      {children}
    </h1>
  );
};

export default HeadingText;
