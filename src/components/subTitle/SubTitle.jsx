import React from 'react';
import styles from './subtitle.module.scss';
import clsx from 'clsx'; 

const SubTitle = ({ children, font = 'default', className = '' }) => {
  const fontClass = font === 'script' ? styles['subtitle--script'] : '';

  return (
    <p className={clsx(styles.subtitle, fontClass, className)}>
      {children}
    </p>
  );
};

export default SubTitle;
