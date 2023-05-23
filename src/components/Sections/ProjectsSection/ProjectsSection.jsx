import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import gitIcon from '../../../assets/git-icon.png'
import { username } from '../../../data/user'

export const ProjectSection = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`)
        console.log(response.data)
        setRepositories(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRepositories()
  }, [])

  return (
    <section className={styles.projectSection}>
      <h2>Projetos</h2>
      <ul className={styles.projectList}>
        {repositories.map((repository, index) => (
          <li key={index} className={styles.projectItem}>
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
        ))}
      </ul>
    </section>
  )
}
