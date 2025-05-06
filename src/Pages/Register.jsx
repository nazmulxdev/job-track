import React, { useEffect } from "react";
import { Link } from "react-router";

const Register = () => {
    useEffect(() => {
        document.title = "JobTrack | register";
      }, []);
  return (
    <div className="w-full max-w-md p-4 rounded-md shadow-2xl shadow-violet-500 sm:p-8 mx-auto my-8">
      <h2 className="mb-3 text-3xl font-semibold text-center text-violet-600">
        Create a free account
      </h2>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-violet-500 my-4" />
        <hr className="w-full border-t-2 border-violet-500 my-4" />
      </div>

      <form className="space-y-8">
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
              className="w-full px-3 py-2 border border-violet-500 text-violet-600 rounded-md mb-4"
            />
            <label htmlFor="email" className="block text-sm font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Photo URL"
              className="w-full px-3 py-2 border border-violet-500 text-violet-600 rounded-md mb-4"
            />
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
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
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
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-500 text-white hover:cursor-pointer"
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-violet-500 my-4" />
        <p className="px-3 ">OR</p>
        <hr className="w-full border-t-2 border-violet-500 my-4" />
      </div>
      <p className="text-sm text-center font-medium">
        Already have an account?
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

export default Register;
