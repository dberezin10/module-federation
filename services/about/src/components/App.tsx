import React from 'react';
import Layout from "@packages/shared/src/components/Layout";
import About from "@/components/About";

import {Outlet} from "react-router-dom";
import Header from "@packages/shared/src/components/Header";
import Footer from "@packages/shared/src/components/Footer";
import CurrentPage from "host/src/components/CurrentPage";




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