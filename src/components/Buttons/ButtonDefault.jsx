import React from 'react'
import styles from './styles.module.css';

export const ButtonDefault = ({ textContent, classType }) => {
  const buttonClassType = `${styles[classType]} ${styles.buttonDefault}`;

  return (
    <>
      <button className={buttonClassType}>{textContent}</button>
    </>
  );
};
