import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps'
import Installation from '../pages/Installation/Installation';
import AppDetail from '../pages/AppDetails/AppDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader: async () => {
              const res = await fetch("/appData.json");
              if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
              },
            path: '/',
            Component: Home
        },
        {
          path: '/apps',
          Component: Apps,
          loader: async () => {
          const res = await fetch("/appData.json");
          if (!res.ok) throw new Error("Failed to fetch data");
          return res.json();
        },

        },
        {
          path: '/installation',
          Component: Installation,
          loader: async () => {
          const res = await fetch("/appData.json");
          if (!res.ok) throw new Error("Failed to fetch data");
            return res.json();
          }
        },
        {
          path: '/app/:id',
          Component: AppDetail,
          loader: async ({ params }) => {
          const res = await fetch("/appData.json");
          if (!res.ok) throw new Error("Failed to fetch data");
          const data = await res.json();
          return data.find(app => app.id === parseInt(params.id));
          },
        }

    ]
  },
]);


