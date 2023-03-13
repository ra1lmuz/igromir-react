import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/",
            element: <HomePage />,
            index: true
        },
        {
          path: '/game/:id',
          element: <SinglePage />,
        }
    ],
  },
]);

export default router;
