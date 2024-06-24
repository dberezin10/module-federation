import {createBrowserRouter} from "react-router-dom";

// // @ts-ignore
// import shopRoutes from 'shop/Router'
// @ts-ignore
import aboutRoutes from 'about/Router'
import Layout from "@packages/shared/src/components/Layout";
import CurrentPage from "@packages/shared/src/components/CurrentPage";
import React from "react";
// @ts-ignore
import AppAbout from 'about/App'
import App from "@/app/App";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // ...shopRoutes,
      // ...aboutRoutes
      // {
      //   path: '/about',
      //   element: <div>123</div>
      // },
    ]
  },
  {
    path: '/about',
    element: <AppAbout />,
  },

]);
