import React from 'react';
import {Link, useParams, useLocation} from "react-router-dom";

// @ts-ignore
import styles from './Header.module.scss'
import {Routes} from "../routes/routes";

const Header = () => {

    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link
                            to={Routes.main}
                            className={Routes.main === pathname ? styles.linkActive : styles.link}
                        >
                            Main
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link
                            to={Routes.about}
                            className={Routes.about === pathname ? styles.linkActive : styles.link}
                        >
                            About
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link
                            to={Routes.payment}
                            className={Routes.payment === pathname ? styles.linkActive : styles.link}
                        >
                            Payment
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;