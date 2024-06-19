import {createBrowserRouter} from "react-router-dom";
import App from "@/components/App";
import {Suspense} from "react";
import {LazyAbout} from "@/pages/About/About.lazy";

const routes = [
  {
    path: '/about',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback="loading..."><LazyAbout /></Suspense>,
      },
      {
        path: '/about/main',
        element: <Suspense fallback="loading..."><div>122</div></Suspense>,
      },
    ]
  }
]

export const router = createBrowserRouter(routes);

export default routes
