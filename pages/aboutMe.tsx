import styles from '../styles/Home.module.css'
import Image from 'next/image'
import aboutMe_styles from '../styles/aboutMe_styles.module.css'

export default function Education() {
  return (
  <>
      <h2 className={aboutMe_styles.titles}>ABOUT ME</h2>
        <div className={aboutMe_styles.profilePic}>
          <Image
                src="/me3.jpg"
                alt="Rishika Sankaran"
                width='350'
                height='300'
          />
        </div>
      <div className={aboutMe_styles.bio}>
        <span className={aboutMe_styles.bio_tagline}>
        Passion is the elixir for the soul, one that rejuvenates the spirit like no other.
        </span><br/>
        My zeal for coding has led me all the way across the globe, acting as a constant
        drive for me to graduate with a Masters in Computer Science from UC, Irvine. I have developed a far-reaching
        competence and a deep interest in Web Development, Deep Learning, AWS, Python and Computer Vision. My courses during my graduate
        study have imparted knowledge of subjects as Data Structures, Advanced Algorithms, Database Management,
        Operating System, Advanced Problem Solving and Machine Learning, to name a few. This, combined with my
        academic projects, has helped me hone my skills and emerge as an extremely passionate and focused individual.
        In short, I am someone with a burning passion and relentless persistence to do what it takes,
        and I come with a light-hearted vibe and great inter-personal skills. In the upcoming years, I wish to have a
        steep-learning curve while being able to contribute my best as an individual.
      </div>
  </>
  )
}

export {};