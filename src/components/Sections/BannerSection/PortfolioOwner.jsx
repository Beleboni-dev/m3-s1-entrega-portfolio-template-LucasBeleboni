import React from 'react'
import styles from './styles.module.css';
import { ButtonDefault } from '../../Buttons/ButtonDefault';

export const PortfolioOwner = ({username, interestingPhrase, children}) => {
  return (
    <div className={styles.ownerContainer}>
    <span className={styles.ownerUsername}>{username}</span>
    {children}
    <span className={styles.ownerPhrase}><cite>{interestingPhrase}</cite></span>
    <ButtonDefault textContent={"Saiba Mais"} classType={"bannerSectionButton"}/>
    </div>
  )
}
