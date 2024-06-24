import React from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
// @ts-ignore
import Trash from 'about/About'
import CurrentPage from "@packages/shared/src/components/CurrentPage";
import Header from "@packages/shared/src/components/Header";
import Footer from "@packages/shared/src/components/Footer";
import Layout from "@packages/shared/src/components/Layout";

// // @ts-ignore
// import About from 'about/About'

const App = () => {


    //TODO: exposes: {
    //         './App': './src/components/App'
    //       },
    // need exposes main component about

    return (
        <>
            <Layout>
                <CurrentPage />
                lalala
                {/*<About />*/}
                {/*<Outlet />*/}
            </Layout>
        </>
    );
};

export default App;