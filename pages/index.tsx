import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import TopSection from './topSection'
import Link from 'next/link';
import Education from './education'
import Experience from './experience'
import Projects from './projects'
import AboutMe from './aboutMe'
export default function Home() {
    return (
    <>
        <Head>
            <title>Portfolio</title>
        </Head>
        <main>
            <div className={`${styles.topSection}`}>
                <TopSection/>
            </div>
            <div className={styles.tile}>
                <AboutMe/>
            </div>
            <div className={styles.tile}>
                <Education/>
            </div>
            <div className={styles.tile}>
                <Experience/>
            </div>
            <div className={styles.tile}>
                <Projects/>
            </div>
        </main>
    </>
    )
}
