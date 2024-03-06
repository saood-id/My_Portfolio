import React from 'react';
import { getImageUrl } from '../../utils';
 import styles from "./Contact.module.css"
export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
     <div className={styles.text}>
        <h2>Contacts</h2>
        <p>Feel free to reach out!</p>
     </div>
     <ul className={styles.links}>
        <li className={styles.link}>
            
            <a href="mailto:saoodid39@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
        </li>
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/mohammed-saood-a96120226/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" /></a>
        </li>
        <li className={styles.link}>
            
            <a href="https://github.com/saood-id"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
        </li>
     </ul>
    </footer>
  )
}
