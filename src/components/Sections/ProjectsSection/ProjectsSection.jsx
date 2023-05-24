/* Hooks and axios import */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* Components Imports */
import { username } from '../../../data/user'
import ProjectItem from './ProjectsItem'

/* Styles import */
import styles from './styles.module.css'

export const ProjectSection = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`)
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
          <ProjectItem repository={repository} key={index} />
        ))}
      </ul>
    </section>
  )
}
