import React, { useContext } from "react";
import navImage from "../assets/logo-violet.png";
import Avatar from "./Avatar";
import AuthContext from "../Context/AuthContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

const NavBar = () => {
  const { currentUser, logOut, sweetSuccess } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      const successMessage = "You have logged out";
      sweetSuccess(successMessage).then(() => {
        navigate("/");
      });
    });
  };

  const logInButtons = (
    <>
      <NavLink
        to="/logIn"
        state={location.state}
        className="font-bold text-[0.75rem] sm:text-lg"
      >
        Log in
      </NavLink>
      <NavLink
        to="/register"
        state={location.state}
        className="font-bold text-[0.75rem] sm:text-lg"
      >
        Register
      </NavLink>
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
        <NavLink to="/" className="font-bold text-[0.75rem] sm:text-lg">
          Home
        </NavLink>
        <NavLink
          to="/contactUs"
          className="font-bold text-[0.75rem] sm:text-lg"
        >
          ContactUs
        </NavLink>

        {currentUser ? (
          <>
            <NavLink to="/profile">
              <Avatar currentUser={currentUser}></Avatar>
            </NavLink>
            <button onClick={handleLogOut} className="btn btn-primary btn-sm">
              LogOut
            </button>
          </>
        ) : (
          logInButtons
        )}
      </div>
    </div>
  );
};

export default NavBar;
