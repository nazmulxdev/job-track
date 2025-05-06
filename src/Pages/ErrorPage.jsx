import React, { useEffect } from "react";
import errorImage from "../assets/404-error-purple.png";
import NavBar from "../Components/NavBar";
import { Link } from "react-router";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "JobTrack | 404-ErrorPage";
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <img className="mx-auto w-60 max-w-md my-8" src={errorImage} alt="" />
      <div className="text-center space-y-4 xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
          <span className="text-primary">404 -</span>Page Not Found
        </h1>
        <p className="text-sm md:text-xl font-medium">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
