import React from 'react';
import { useLocation} from "react-router-dom";
import { Routes } from "../routes/routes";

const CurrentPage = () => {
    const { pathname } = useLocation();
    console.log('pathname', pathname)
    return (
        <div>
            <h1>Текущая странца -  {'\u0020'}
                {pathname === Routes.main && 'Main'}
                {pathname === Routes.about && 'About'}
                {pathname === Routes.payment && 'Payment'}
            </h1>
        </div>
    );
};

export default CurrentPage;