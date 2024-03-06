import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
export const About = () => {
  return (
    <section className={styles.container}  id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")}alt="Me sitting with a laptop" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Front-end Developer</h3>
                        <p>
                            I am a front-end developer with experience in building resposive and optimized  sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Problem Solver</h3>
                        <p>
                            I am a Problem solver with  over 250 Question solved on Leetcode
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Desinger</h3>
                        <p>
                            I am a UI Desinger with experience in building Designs using figma.
                        </p>
                    </div>
                </li>
            </ul>

                
        </div>
    </section>
  )
}
