import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import NavBar from "../Components/NavBar";
import AuthContext from "../Context/AuthContext";
import Footer from "../Components/Footer";

const LogIn = () => {
  const { signInGoogle, setCurrentUser, signInEmail } = useContext(AuthContext);
  const [errorText, setErrorText] = useState(null);
  const [currentEmail, setCurrentEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInEmail(email, password)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorText(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((loggedUser) => {
        const user = loggedUser.user;
        setCurrentUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorText(errorMessage);
      });
  };

  useEffect(() => {
    document.title = "JobTrack | LogIn";
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-xl p-4 rounded-md shadow-2xl shadow-primary sm:p-8 mx-auto my-8">
        <h2 className="mb-3 text-3xl font-semibold text-center text-primary">
          Login to your account
        </h2>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-violet-500 my-4" />
          <hr className="w-full border-t-2 border-violet-500 my-4" />
        </div>
        <form onSubmit={handleLogIn} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-violet-500 text-violet-600 rounded-md "
                onChange={(event) => setCurrentEmail(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="/resetPassword"
                  state={{ currentEmail }}
                  className="text-xs hover:underline font-medium text-violet-500"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md 
              border-violet-500 text-violet-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-500 text-white"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-violet-500 my-4" />
          <p className="px-3 ">OR</p>
          <hr className="w-full border-t-2 border-violet-500 my-4" />
        </div>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleLogIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-violet-600 text-violet-500 border-2 bg-white  hover:border hover:text-white hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          {errorText && (
            <p className="font-medium text-lg text-red-500">{errorText}</p>
          )}
          <p className="text-sm text-center font-medium">
            Don't have account?
            <Link
              to="/register"
              state={location.state}
              rel="noopener noreferrer"
              className="focus:underline hover:underline text-primary underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LogIn;
