import React from 'react';

// @ts-ignore
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            &copy; {new Date().getFullYear()}
        </footer>
    );
};

export { Footer };