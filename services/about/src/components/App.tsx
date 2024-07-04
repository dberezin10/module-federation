import React from 'react';
import { CurrentPage, Layout } from "@packages/shared/src/components";
import About from "@/components/About";


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