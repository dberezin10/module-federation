import React from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
// @ts-ignore
import Trash from 'about/About'
import CurrentPage from "@/components/CurrentPage";
import Header from "@packages/shared/src/components/Header";
import Footer from "@packages/shared/src/components/Footer";
import Layout from "@packages/shared/src/components/Layout";


const App = () => {

    return (
        <>
            <Layout>
                <CurrentPage />
                {/*<Outlet />*/}
            </Layout>
        </>
    );
};

export default App;