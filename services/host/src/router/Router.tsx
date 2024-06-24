import {createBrowserRouter} from "react-router-dom";

// @ts-ignore
import aboutRoutes from 'about/Router'
// @ts-ignore
import paymentRoutes from 'payment/Router'

import React from "react";
// @ts-ignore
// import AppAbout from 'about/App'
import App from "@/app/App";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  ...aboutRoutes,
  ...paymentRoutes
]);
