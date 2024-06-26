import React from 'react';
import { useLocation} from "react-router-dom";
import { Routes } from "../routes/routes";

const CurrentPage = () => {
    const { pathname } = useLocation();
    console.log('pathname', pathname)
    return (
        <div>
            <h1>Переиспользуемый компонент - "CurrentPage"</h1>
            <h2>Текущая странца -  {'\u0020'}
                {pathname === Routes.host && 'Host'}
                {pathname === Routes.about && 'About'}
                {pathname === Routes.payment && 'Payment'}
            </h2>
        </div>
    );
};

export default CurrentPage;