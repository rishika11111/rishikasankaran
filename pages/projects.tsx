import styles from '../styles/Home.module.css'
import project_styles from '../styles/projects.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
  <>
      <h2 className={project_styles.titles}>PROJECTS</h2>
      <p className={project_styles.project}> SlamShut |
      <Link href='https://rishika11111.github.io/SlamShut/' className={project_styles.links} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">View Project</a></Link></p>
       <p className={project_styles.dates}>Nov 2022 </p>
       <p className={project_styles.tech}>Unity, C# and GIMP</p>
       <ul>
        <li>Created a 2D game with graphics, animations and particle effect simulations in Unity and GIMP</li>
        <li>Supported event handling and logical responses with C# Scripts.</li>
      </ul>

      <hr/>
       <p className={project_styles.project}>A Multitask Detection System |
      <Link href='http://ymerdigital.com/uploads/YMER201300.pdf' className={project_styles.links} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">View Publication</a></Link>
       </p>
        <p className={project_styles.dates}>2020 – 2021</p>
        <p className={project_styles.tech}>Python, Flask, OpenCV and Deep Learning</p>
        <ul>
        <li> Published a paper in Ymer journal</li>
         <li>Produced an integrated platform having accuracy of 80% using Flask and HTML comprising three sub-components:
         <ul>
            <li>Covid-19 Detection: Implemented CNN on the dataset for classification of instances into healthy or Covid-infected
            individuals.</li>
            <li>Face and Eye Detection System: Deployed Viola Jones algorithm for narrowing out facial features on input image.</li>
            <li>Drowsiness Detection System for Drivers: A CNN model raises an alarm alerting when the driver falls asleep. </li>
         </ul>
         </li>
        </ul>


      <hr/>

        <p className={project_styles.project}>Brief Analysis of Success Rates of IPL Teams (Season-wise)</p>
        <p className={project_styles.dates}>Aug 2020</p>
        <p className={project_styles.tech}>Python and Data Science</p>
        <ul>
        <li>Synthesized a dataset by extracting statistical values of past performances from Wikipedia sources.</li>
        <li>Conducted a comparative analysis on the performances of various cricket teams in Indian Premier League (IPL) by
            plotting a bar chart in accordance with Cairo’s four principles.</li>
        </ul>
  </>
  )
}

export {};