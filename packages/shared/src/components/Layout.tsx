import React from 'react';
import Header from "./Header";

import {Outlet} from "react-router-dom";
import Footer from "./Footer";

// @ts-ignore
import styles from "./Layout.module.scss";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            {/*<Outlet />*/}
            <main className={styles.content}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;