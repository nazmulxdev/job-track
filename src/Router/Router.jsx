import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import CompanyDetails from "../Layouts/CompanyDetails";
import LoaderDiv from "../Components/LoaderDiv";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path: "/company/:id",
    element: <CompanyDetails></CompanyDetails>,
    loader: () => fetch("/job-company.json"),
    hydrateFallbackElement: <LoaderDiv></LoaderDiv>,
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
