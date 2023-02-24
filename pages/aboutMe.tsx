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
        "It is said that passion is the elixir for the soul, one that rejuvenates the spirit like no other."
        </span>
        <br/>
        Years have passed since I wrote my first “Hello World” program in Java, and yet, today I feel the
        very same wave of excitement when I come up with a coding logic and the same sense of euphoria that
        comes after its successful execution. My zeal for coding has led across the world and has been a constant
        push to pursue my Masters in Computer Science from UC, Irvine. I have developed competence and far-reaching
        interest in Wed Development, Deep Learning, AWS, Python and Computer Vision. My courses during my graduate
        study have imparted knowledge of subjects as Data Structures, Advanced Algorithms, Database Management,
        Operating System, Advanced Problem Solving and Machine Learning, to name a few. This, combined with my
        academic projects, helped me hone my skills and emerge as a more passionate and focused individual.
      </div>
  </>
  )
}

export {};