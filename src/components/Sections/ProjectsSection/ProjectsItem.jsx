import React from 'react'
import gitIcon from '../../../assets/git-icon.png'

/* Styles Imports */
import styles from './styles.module.css'

const ProjectItem = ({ repository, index }) => {
    return (
        <li className={styles.projectItem} key={index}>
            <div className={styles.itemHeader}>
                <span>{repository.name}</span>
                <img src={gitIcon} alt={repository.name} />
            </div>
            <div className={styles.projectContent}>
                <p>{repository.description}</p>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                    Saiba mais
                </a>
            </div>
        </li>
    )
}

export default ProjectItem
