import React from 'react'
import whatsAppLogo from '../../assets/whatsapp-icon.png'
import linkdinLogo from '../../assets/linkedin-icon.png'
import githubLogo from '../../assets/github-icon.png'
import styles from './styles.module.css'
export const SocialMedias = () => {
    return (
        <div className={styles.containerWrapper}>
        <h2 className={styles.socialTitle}>Contato</h2>
        <div className={styles.logoContainer}>
            <img className={styles.socialMediaLogo} src={whatsAppLogo}alt="whatsapp-logo" />
            <img className={styles.socialMediaLogo} src={linkdinLogo}alt="linkedin-logo" />
            <img className={styles.socialMediaLogo} src={githubLogo}alt="github-logo" />
        </div>
        </div>
    )
}
