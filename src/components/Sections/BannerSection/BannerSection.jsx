import React from 'react'

/* Components Imports */
import { username } from '../../../data/user'
import { PortfolioOwner } from './PortfolioOwner'
import bannerImg from "../../../assets/banner-img.png"

/* Styles Import */
import styles from './styles.module.css'

export const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <PortfolioOwner username={username} interestingPhrase={'Comprometido em alcançar resultados excepcionais.'} >
        <h1 className={styles.welcomeTitle}>Bem-vindo ao meu Portfolio</h1>
      </PortfolioOwner>
      <img className={styles.bannerImage} src={bannerImg} alt="banner-image" />
    </section>
  )
}
