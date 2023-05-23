import React from 'react'
import { technologies } from '../../../data/technologies'
import styles from './styles.module.css'

export const TechSection = () => {
  return (
    <section className={styles.techSection}>
      <h2>Tecnologias</h2>
      <ul className={styles.techList}>
        {technologies.map((tech, index) => (
          <li key={index} className={styles.techItem}>
            <img src={tech.img} alt={tech.name}/>
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
