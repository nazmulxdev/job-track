import React from "react";
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>root</h1>,
  },
  {
    path: "/logIn",
    element: <h1>log in</h1>,
  },
  {
    path: "/register",
    element: <h1>register</h1>,
  },
]);

export default Router;
