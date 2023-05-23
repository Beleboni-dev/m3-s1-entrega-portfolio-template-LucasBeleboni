import React from 'react'
import { username } from '../../../data/user'
import { PortfolioOwner } from './PortfolioOwner'
import { ButtonDefault } from '../../Buttons/ButtonDefault'
import styles from './styles.module.css';
import bannerImg from "../../../assets/banner-img.png";

export const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <PortfolioOwner username={username} interestingPhrase={'Orientado a resultados, comprometido em alcançar resultados excepcionais.'} >
        <h1 className={styles.welcomeTitle}>Bem vindo ao meu Portfolio</h1>
      </PortfolioOwner>
      <img className={styles.bannerImage} src={bannerImg} alt="banner-image"/>
    </section>
  )
}
