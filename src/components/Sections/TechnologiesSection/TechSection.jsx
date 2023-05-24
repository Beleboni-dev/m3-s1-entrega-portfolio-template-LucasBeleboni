/* Components Imports */
import React from 'react'
import { technologies } from '../../../data/technologies'
import TechItem from './TechItem'
/* Styles Import */
import styles from './styles.module.css'

export const TechSection = () => {
  return (
    <section className={styles.techSection}>
      <h2>Tecnologias</h2>
      <ul className={styles.techList}>
        {technologies.map((tech, index) => (
          <TechItem tech={tech} key={index} />
        ))}
      </ul>
    </section>
  )
}
