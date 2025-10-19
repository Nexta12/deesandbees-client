import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./collasable.module.scss";

const CollapsableBox = ({ title, children,  className }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={`${styles.collapsableBox} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.actions}>
          <Link
            to={"#"}
            onClick={() => setShowContent(!showContent)}
            className={styles.toggle}
          >
            {showContent ? (
              <>
                <FiChevronUp className="inline" /> 
              </>
            ) : (
              <>
                <FiChevronDown className="inline" /> 
              </>
            )}
          </Link>

        </div>
      </div>

      {showContent && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapsableBox;
