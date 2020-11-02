import React from 'react';
import { Columns, Container } from 'react-bulma-components';
import styles from './home.module.css';
import Heading from '../Heading/index';

export default function Home() {
    return (
        <Container className={styles.homeDiv}>
            <Columns className='is-centered'>
                <Columns.Column>
                    <p className={styles.subtitle}>y'all rule.</p>
                </Columns.Column>
            </Columns>
            <Columns className='is-centered'>
                <Columns.Column>
                    <span className={styles.arrow}>&#10142;</span>
                </Columns.Column>
            </Columns>
            <Columns className='is-centered'>
                <a href='/Friends' className={styles.enter}>
                    <span><em>enter site</em></span>
                </a>
            </Columns>
        </Container>
    );
}