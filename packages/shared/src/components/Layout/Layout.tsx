import React from 'react';

// @ts-ignore
import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";



const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export { Layout };