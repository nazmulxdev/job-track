import React, { useContext } from "react";
import navImage from "../assets/logo-violet.png";
import Avatar from "./Avatar";
import AuthContext from "../Context/AuthContext";
import { Link, NavLink, useLocation } from "react-router";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  const logInButtons = (
    <>
      <Link
        to="/logIn"
        state={location.state}
        className="btn btn-primary btn-sm md:btn-md border-0"
      >
        Log in
      </Link>
      <Link
        to="/register"
        state={location.state}
        className="btn btn-primary btn-sm md:btn-md border-0"
      >
        Register
      </Link>
    </>
  );
  return (
    <div className="navbar shadow-accent xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5   shadow-xl mx-auto py-4 justify-between">
      <div className="navbar-start">
        <div className="flex items-center justify-center">
          <img className="w-10 sm:w-14 md:w-20 lg:w-28" src={navImage} alt="" />
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Job <span className="text-primary">Track</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <NavLink to="/" className="text-base sm:text-lg">
          Home
        </NavLink>
        <NavLink to="/contactUs" className="text-base sm:text-lg">
          Contact Us
        </NavLink>

        {currentUser ? (
          <>
            <NavLink to="/profile">
              <Avatar currentUser={currentUser}></Avatar>
            </NavLink>
          </>
        ) : (
          logInButtons
        )}
      </div>
    </div>
  );
};

export default NavBar;
