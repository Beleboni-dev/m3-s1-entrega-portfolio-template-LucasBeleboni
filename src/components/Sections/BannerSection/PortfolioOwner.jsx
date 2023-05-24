import React from 'react'
import { ButtonDefault } from '../../Buttons/ButtonDefault'

/* Styles Import */
import styles from './styles.module.css'

export const PortfolioOwner = ({ username, interestingPhrase, children }) => {
  return (
    <div className={styles.ownerContainer}>
      <span className={styles.ownerUsername}>{username}</span>
      {children}
      <span className={styles.ownerPhrase}><cite>{interestingPhrase}</cite></span>
      <ButtonDefault textContent={'Saiba Mais'} classType={'bannerSectionButton'} />
    </div>
  )
}
