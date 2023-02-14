import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../pages/Home';
import About from '../pages/About'
import Housing from '../pages/Housing'
import Error from '../pages/Error'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
        path: "/about",
        element: <About />,
    },
    {
      path: "/housing",
      element: <Housing />,
    },
    {
      path: "/error",
      element: <Error />,
    },

  ]);

export default router;

