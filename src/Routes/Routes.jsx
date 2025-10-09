import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps'
import Installation from '../pages/Installation/Installation';
import AppDetail from '../pages/AppDetails/AppDetails';
import AppError from '../pages/AppError/AppError';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: () => fetch("/appData.json").then(res => res.json()),
            
            Component: Home
        },
        {
          path: '/apps',
          Component: Apps,
          loader: () => fetch("/appData.json").then(res => res.json()),
        },

        
        {
          path: '/installation',
          Component: Installation,
          loader: () => fetch("/appData.json").then(res => res.json()),
        },
        {
          path: '/app/:id',
          Component: AppDetail,
          loader: () => fetch("/appData.json").then(res => res.json()),
          errorElement: AppError
        }

    ]
  },
]);


