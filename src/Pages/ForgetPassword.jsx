import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import NavBar from "../Components/NavBar";
import AuthContext from "../Context/AuthContext";
import Footer from "../Components/Footer";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [previousEmail, setPreviousEmail] = useState("");
  useEffect(() => {
    if (location.state.currentEmail) {
      setPreviousEmail(location.state.currentEmail);
    }
  }, [location]);
  useEffect(() => {
    document.title = "JobTrack | ResetPassword";
  }, []);

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email).then(() => {
      window.location.href = "https://mail.google.com";
    });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className=" max-w-xl p-4 rounded-md shadow-2xl shadow-primary sm:p-8 mx-auto my-8">
        <h2 className="mb-3 text-3xl font-semibold text-center text-primary">
          Reset Your Password!
        </h2>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-primary my-4" />
          <hr className="w-full border-t-2 border-primary my-4" />
        </div>
        <form onSubmit={handleResetPassword} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={previousEmail}
                onChange={(e) => setPreviousEmail(e.target.value)}
                id="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-primary text-primary rounded-md "
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:cursor-pointer"
          >
            Reset Password
          </button>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="w-full border-t-2 border-primary my-4" />
          <p className="px-3 ">OR</p>
          <hr className="w-full border-t-2 border-primary my-4" />
        </div>
        <p className="text-sm text-center font-medium my-4">
          Remembered your password?
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

export default ForgetPassword;
