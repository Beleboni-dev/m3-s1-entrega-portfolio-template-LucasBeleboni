import React from 'react'
import styles from './styles.module.css'

export const NavMenu = ({menuItems}) => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navMenuList}>
        {
        menuItems.map((item, index) => {
          return(
            <li className={styles.navMenuItem} key={index}>{item}</li>
          )  
        }
        )}
      </ul>
    </nav>
  )
}
