import React from 'react'

/* Styles Import */
import styles from './styles.module.css'

export const ButtonDefault = ({ textContent, classType, onClick }) => {
  const buttonClassType = `${styles[classType]} ${styles.buttonDefault}`

  return (
    <button className={buttonClassType} onClick={onClick}>
      {textContent}
    </button>
  )
}
