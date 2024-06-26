import React from 'react';
import Layout from "@packages/shared/src/components/Layout";
import About from "@/components/About";

import CurrentPage from "@packages/shared/src/components/CurrentPage";




const App = () => {
    return (
        <>
            <Layout>
                <CurrentPage />
                <About />
            </Layout>
        </>
    );
};

export default App;