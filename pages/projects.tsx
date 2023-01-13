import styles from '../styles/Home.module.css'
import exp_styles from '../styles/experience.module.css'

export default function Experience() {
  return (
  <>
      <h2 className={exp_styles.titles}>EXPERIENCE</h2>
      <p className={exp_styles.company}> Amazon, Irvine, California | Amazon Devices - Luna </p>
       <p className={exp_styles.dates}>Jun 2022- Sep 2022 </p>
       <p className={exp_styles.role}>Software Development Engineer Intern</p>
       <ul>
        <li>Created a reports page portraying player usage statistics of games using NextJS, TypeScript and Kotlin.</li>
        <li>Delivered visualizations of game usage metrics using Highcharts and Amazon’s internal tools. </li>
        <li>Focused on test-driven development with Cypress resulting in 98% accuracy.</li>
        <li> Proposed alternate approaches to project implementation leading to 85% reduction in costs.</li>
      </ul>

        <p className={exp_styles.company}> JaysanTech Private Limited, Bangalore, India </p>
        <p className={exp_styles.dates}> Mar 2021- Aug 2021</p>
        <p className={exp_styles.role}>Technical Subject Matter Expert Intern</p>
        <ul>
        <li>Constructed specialized evaluations in client-specific technical domains as AWS, NextJS and SAP among others</li>
        <li>Brainstormed analytical and creative assessment questionnaires for companies predominantly in the IT sectors. </li>
        <li>Achieved 95% and 99% satisfaction rates on first and second drafts respectively.</li>
        </ul>

        <p className={exp_styles.company}> ICSoln, Bangalore, India </p>
        <p className={exp_styles.dates}> Nov 2020 - Dec 2020</p>
        <p className={exp_styles.role}> Python and Machine Learning Intern </p>
        <ul>
        <li>Spearheaded a team of 3 to predict the price of automobiles based on a given dataset.</li>
        <li>Performed exploratory data analysis on the dataset using Pandas, Matplotlib and Seaborn.</li>
        <li>Developed Machine Learning models with accuracy rate of 85%.</li>
        </ul>

        <p className={exp_styles.company}> RYD, Bangalore, India</p>
        <p className={exp_styles.dates}>Jul 2020 - Aug 2020</p>
        <p className={exp_styles.role}> Python Developer Intern</p>
        <ul>
        <li>Produced a 98% precise Computer Vision model for problem-specific image manipulation.</li>
        <li>Tested out YOLO, CNN and Detectron algorithms for muti-batch processing and image segmentation.</li>
        <li>Employed YOLO with an initial accuracy of 85% tested on 30000 images.</li>
        </ul>

        <p className={exp_styles.company}>Calligo Technologies, Bangalore, India</p>
        <p className={exp_styles.dates}>Jan 2018</p>
        <p className={exp_styles.role}>Big Data and Storage Technologies Intern</p>
        <ul>
        <li>Drafted database tests and employed Sysbench commands to draw statistical analysis and latency performances of data
            queries on cache and hard drive.</li>
        </ul>
  </>
  )
}