import React from 'react'

/* Components Import */
import { NavMenu } from '../Navs/NavMenu'
import { ButtonDefault } from '../Buttons/ButtonDefault'
import logo from "../../assets/portfolio.png"

/* Styles Import */
import styles from './styles.module.css'

export const Header = () => {
  const menuItems = ["Sobre", "Slack", "Projetos"]

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo-portfólio" />
      <NavMenu menuItems={menuItems} />
      <ButtonDefault textContent={"Contato"} classType={"headerDefaultButton"} />
    </header>
  )
}
