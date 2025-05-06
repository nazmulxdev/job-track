import React, { useEffect } from "react";
import { Link } from "react-router";

const ForgetPassword = () => {
  useEffect(() => {
    document.title = "JobTrack | ResetPassword";
  }, []);
  return (
    <div className="w-full max-w-md p-4 rounded-md shadow-2xl shadow-violet-500 sm:p-8 mx-auto my-8">
      <h2 className="mb-3 text-3xl font-semibold text-center text-violet-600">
        Reset Your Password!
      </h2>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-violet-500 my-4" />
        <hr className="w-full border-t-2 border-violet-500 my-4" />
      </div>
      <form className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border border-violet-500 text-violet-600 rounded-md "
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-500 text-white hover:cursor-pointer"
        >
          Confirm
        </button>
      </form>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-violet-500 my-4" />
        <p className="px-3 ">OR</p>
        <hr className="w-full border-t-2 border-violet-500 my-4" />
      </div>
      <p className="text-sm text-center font-medium my-4">
        Remembered your password?
        <Link
          to="/logIn"
          rel="noopener noreferrer"
          className="focus:underline hover:underline text-violet-500"
        >
          Log in here
        </Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
