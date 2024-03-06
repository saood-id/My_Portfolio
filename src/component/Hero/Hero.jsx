import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I am Mohammed Saood Ahmed</h1>
            <p className={styles.description}>
                 I am a Software developer with  experience in javaScript, React and NodeJs.if you'd learn to  like more!
            </p>
            <div className={styles.btn}>
            <a href="mailto:saoodid39@gmail.com" className={styles.contactBtn}>Contact me</a>
            <a href="https://drive.google.com/file/d/182ZuoqOUolJeaGfMfdJ1vvtuxufa7Qu4/view?usp=drivesdk" className={styles.contactBtn}target='_blank'>Download Resume</a>
            </div>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero-Image" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
