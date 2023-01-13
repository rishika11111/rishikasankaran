import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import TopSection from './topSection.tsx'
import Link from 'next/link';
import Education from './education.tsx'
import Experience from './experience.tsx'
import Projects from './projects.tsx'
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
