import React from 'react';
import Layout from "@packages/shared/src/components/Layout";
import Payment from "@/components/Payment";

import CurrentPage from "@packages/shared/src/components/CurrentPage";




const App = () => {
    return (
        <>
            <Layout>
                <CurrentPage />
                <Payment />
            </Layout>
        </>
    );
};

export default App;