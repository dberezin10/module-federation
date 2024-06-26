import React from 'react';

import CurrentPage from "@packages/shared/src/components/CurrentPage";

import Layout from "@packages/shared/src/components/Layout";


const App = () => {

    return (
        <>
            <Layout>
                <CurrentPage />
                <h3>Контент основной страницы</h3>
            </Layout>
        </>
    );
};

export default App;