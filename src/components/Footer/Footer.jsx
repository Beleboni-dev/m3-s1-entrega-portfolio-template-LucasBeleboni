import React from 'react'
/* Components Import */
import { user } from '../../data/user'
import { SocialMedias } from '../SocialMediasIcons/SocialMedias'

/* Styles Import */
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <SocialMedias />
        <p>Todos os direitos reservados - <span>{user}</span></p>
      </div>
    </footer>
  )
}

export default Footer