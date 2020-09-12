import React from 'react';
import styles from './home.module.css';
import Heading from '../Heading/index';

export default function Home() {
    return (
        <div className={styles.homeDiv}>
            <Heading text='dedicated to the ones i &lt;3' className={styles.headingMain}/>
            <p className={styles.subtitle}>y'all rule.</p>
            <span className={styles.arrow}>&#10142;</span>
            <div>
                <a href="/Friends" className={styles.enter}>
                <span><em>enter site</em></span>
                </a>
            </div>
        </div>
    );
}