import { user } from '../../data/user'
import { SocialMedias } from '../SocialMediasIcons/SocialMedias'
import styles from './styles.module.css'
import React from 'react'

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