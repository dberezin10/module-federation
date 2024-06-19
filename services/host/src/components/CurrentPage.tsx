import React from 'react';
import { useLocation} from "react-router-dom";
import { Routes } from "@packages/shared/src/routes/routes";

const CurrentPage = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <h1>Текущая странца -  {'\u0020'}
                {pathname === Routes.main && 'Main'}
                {pathname === Routes.about && 'About'}
            </h1>
        </div>
    );
};

export default CurrentPage;