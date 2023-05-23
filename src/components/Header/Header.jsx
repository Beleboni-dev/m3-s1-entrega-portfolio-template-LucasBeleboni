import React from 'react'
import { NavMenu } from '../Navs/NavMenu'
import { ButtonDefault } from '../Buttons/ButtonDefault'
import styles from './styles.module.css'
import logo from "../../assets/portfolio.png";
export const Header = () => {
    const menuItems = ["Sobre", "Slack", "Projetos"]

    return (
        <header className={styles.header}>
        <img src={logo} alt="logo-portfólio" />
        <NavMenu menuItems={menuItems}/>
        <ButtonDefault textContent={"Contato"} classType={"headerDefaultButton"}/>
        </header>
  )
}
