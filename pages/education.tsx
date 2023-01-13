import styles from '../styles/Home.module.css'
import edu_styles from '../styles/education_styles.module.css'

export default function Education() {
  return (
  <>
      <h2 className={edu_styles.titles}>EDUCATION</h2>
      <p className={edu_styles.uni} >University of California, Irvine</p>
      <p className={edu_styles.dates}>Dec 2022</p>
      <p>Master of Computer Science, GPA : 3.83/4.0 </p>

      <p className={edu_styles.uni}>Visvesvaraya Technological University, Bangalore, India </p>
      <p className={edu_styles.dates}>2017 - 2021</p>
      <p>BE in Computer Science Engineering, GPA: 3.7/4.0</p>
  </>
  )
}

export {};