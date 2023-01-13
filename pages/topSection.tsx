import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function TopSection() {
  return (
    <div>
        <h1>Rishika Sankaran</h1>
        <p>Irvine, California | (949) 396-9169 | rsankar1@uci.edu</p>
        <Link href='https://www.linkedin.com/in/rishikasankaran/' legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
            <button>LinkedIn</button>
            </a>
        </Link>
        <Link href='https://github.com/rishika11111' legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
            <button>Github</button>
            </a>
        </Link>
        <div className={`${styles.light} ${styles.x1}`}></div>
        <div className={`${styles.light} ${styles.x2}`}></div>
        <div className={`${styles.light} ${styles.x3}`}></div>
        <div className={`${styles.light} ${styles.x4}`}></div>
        <div className={`${styles.light} ${styles.x5}`}></div>
        <div className={`${styles.light} ${styles.x6}`}></div>
        <div className={`${styles.light} ${styles.x7}`}></div>
        <div className={`${styles.light} ${styles.x8}`}></div>
        <div className={`${styles.light} ${styles.x9}`}></div>
    </div>
  )
  }

export {};