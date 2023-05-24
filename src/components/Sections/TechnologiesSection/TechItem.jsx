import React from 'react'
/* Styles import */
import styles from './styles.module.css'

const TechItem = ({ tech, index }) => {
    return (
        <li className={styles.techItem} key={index}>
            <img src={tech.img} alt={tech.name} />
            <span>{tech.name}</span>
        </li>
    )
}

export default TechItem
