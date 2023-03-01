import styles from '../styles/Home.module.css'
import project_styles from '../styles/projects.module.css'
import Link from 'next/link'
import SkillsTable from '../components/skillsTable'

export default function Skills() {
  return (
  <>
      <h2 className={project_styles.titles}>SKILLS</h2>
      <SkillsTable/>
  </>
  )
}

export {};