import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import NavBar from "../Components/NavBar";
import AuthContext from "../Context/AuthContext";
import { auth } from "../FireBase/fireBase.config";
import Footer from "../Components/Footer";

const Register = () => {
  const {
    signInGoogle,
    setCurrentUser,
    createUser,
    updateUser,
    sweetError,
    sweetSuccess,
  } = useContext(AuthContext);
  const [errorText, setErrorText] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then(() => {
        // const user = result.user;

        const profile = {
          displayName: name,
          photoURL: photoURL,
        };

        updateUser(profile).then(() => {
          setCurrentUser(auth.currentUser);
          const successMessage = "You have successfully register";
          sweetSuccess(successMessage);
          navigate(`${location.state ? location.state : "/"}`);
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
        setErrorText(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    signInGoogle()
      .then((loggedUser) => {
        const user = loggedUser.user;
        setCurrentUser(user);
        const successMessage = "You have successfully register";
        sweetSuccess(successMessage);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        sweetError(errorMessage);
        setErrorText(errorMessage);
      });
  };

  useEffect(() => {
    document.title = "JobTrack | register";
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="w-full max-w-xl p-4 rounded-md shadow-2xl shadow-primary sm:p-8 mx-auto my-8">
        <h2 className="mb-3 text-3xl font-semibold text-center text-primary">
          Create a free account
        </h2>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-primary my-4" />
          <hr className="w-full border-t-2 border-primary my-4" />
        </div>

        <form onSubmit={handleRegister} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                className="w-full px-3 py-2 border border-primary text-primary rounded-md mb-4"
              />
              <label htmlFor="email" className="block text-sm font-medium">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Your Photo URL"
                className="w-full px-3 py-2 border border-primary text-primary rounded-md mb-4"
              />
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-primary text-primary rounded-md "
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
              </div>
              <input
                type="password"
                required
                name="password"
                id="password"
                placeholder="*******"
                minLength={6}
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be at least 6 characters, lowercase letter, uppercase letter"
                className="w-full px-3 py-2 border border-primary text-primary rounded-md "
              />
              <p className="validator-hint hidden">
                Length must be at least 6 characters, including
                <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-primary my-4" />
          <p className="px-3 ">OR</p>
          <hr className="w-full border-t-2 border-primary my-4" />
        </div>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleLogIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-primary text-primary border-2 bg-white  hover:border hover:text-white hover:cursor-pointer"
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
            <p className="font-medium text-lg text-red-500 my-2">{errorText}</p>
          )}
        </div>
        <p className="text-sm text-center font-medium">
          Already have an account?
          <Link
            to="/logIn"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-primary"
          >
            Log in here
          </Link>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
