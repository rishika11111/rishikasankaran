import skillsTableStyles from '../styles/components/skillsTable.module.css'

export default function SkillsTable() {
  return (
  <div >
    <table className={skillsTableStyles.container}>
    <tbody>
        <tr>
            <th scope="row">LANGUAGES / DATABASES</th>
            <td>Python, Kotlin, PostgreSQL, MySQL, TypeScript</td>
        </tr>
        <tr>
            <th scope="row" >FRAMEWORKS / LIBRARIES</th>
            <td className={skillsTableStyles.alternateRow}>Git, NextJS, React, Pandas, Numpy, OpenCV, Keras</td>
        </tr>
        <tr>
            <th scope="row">CONCEPTS</th>
            <td>Machine Learning, Web Development, Deep Learning, Data Science</td>
        </tr>
        <tr>
            <th scope="row">CERTIFIED SPECIALIZATIONS</th>
            <td>Python, Deep Learning, Tensorflow Developer, Data Science</td>
        </tr>
        <tr>
            <th scope="row">SELF-DIRECTED COURSES</th>
            <td>Kotlin, Unity, AWS, Machine Learning</td>
        </tr>
        </tbody>
    </table>
  </div>
  );
}
