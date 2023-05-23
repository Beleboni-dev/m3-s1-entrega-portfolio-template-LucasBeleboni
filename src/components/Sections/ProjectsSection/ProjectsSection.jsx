import React from 'react'
import { projects } from '../../../data/projects'
import styles from './styles.module.css'
import gitIcon from '../../../assets/git-icon.png'
export const ProjectSection = () => {
  return (
    <section className={styles.projectSection}>
      <h2>Projetos</h2>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <div className={styles.itemHeader}>
              <span>{project.name}</span>
              <img src={gitIcon} alt={project.name}/>
            </div>
            <div className={styles.projectContent}>
              <p>{project.description}</p>
              <a href="#">Saiba mais</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
