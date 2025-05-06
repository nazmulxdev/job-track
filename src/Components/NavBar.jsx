import React, { useContext } from "react";
import navImage from "../assets/logo-violet.png";
import Avatar from "./Avatar";
import AuthContext from "../Context/AuthContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

const NavBar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogOut = () => {
    logOut().then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };
  const logInButtons = (
    <>
      <Link
        to="/logIn"
        state={location.state}
        className="btn btn-primary border-0"
      >
        Log in
      </Link>
      <Link
        to="/register"
        state={location.state}
        className="btn btn-primary border-0"
      >
        Register
      </Link>
    </>
  );
  return (
    <div className="navbar shadow-accent xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5   shadow-xl mx-auto py-4 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-10 sm:w-14 md:w-20 lg:w-28" src={navImage} alt="" />
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Job <span className="text-primary">Track</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>

        {currentUser ? (
          <>
            <Avatar currentUser={currentUser}></Avatar>
            <button onClick={handleLogOut} className="btn btn-primary border-0">
              Log out
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
