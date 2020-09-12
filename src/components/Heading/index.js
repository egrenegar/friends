import React from 'react';
import styles from './heading.module.css';

export default function Heading(props) {
    return(
        <div>
            <h1 className={styles.heading}>
                {props.text}
            </h1>
        </div>
    );
}