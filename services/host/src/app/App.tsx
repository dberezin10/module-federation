import React from 'react';
import { CurrentPage, Layout } from "@packages/shared/src/components";



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