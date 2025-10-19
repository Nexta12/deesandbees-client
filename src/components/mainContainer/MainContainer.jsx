import styles from "./container.module.scss";
import clsx from "clsx"; 

const MainContainer = ({ children, className = "" }) => {
  return (
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  );
};

export default MainContainer;
