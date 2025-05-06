import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import CompanyDetails from "../Layouts/CompanyDetails";
import LoaderDiv from "../Components/LoaderDiv";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ForgetPassword from "../Pages/ForgetPassword";
import PrivateRoute from "../Private/PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import Blog from "../Pages/Blog";
import UpdateProfile from "../Pages/UpdateProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },

      {
        path: "/company/:id",
        element: (
          <PrivateRoute>
            <CompanyDetails></CompanyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/job-company.json"),
        hydrateFallbackElement: <LoaderDiv></LoaderDiv>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/resetPassword",
    element: <ForgetPassword></ForgetPassword>,
  },
]);

export default Router;
