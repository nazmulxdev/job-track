import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import jobTrackLogo from "../assets/logo-violet.png/";
const ContactUs = () => {
  const { sweetSuccess } = useContext(AuthContext);
  const successMessage =
    "Email sent Successful.Please be patience and wait for our response.";
  const handleMessage = () => {
    sweetSuccess(successMessage);
  };
  useEffect(() => {
    document.title = "JobTrack | ContactUs";
  }, []);
  return (
    <div>
      <div className="text-center">
        <img className="mx-auto w-60 max-w-md mt-8" src={jobTrackLogo} alt="" />
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl">
          Job <span className="text-primary">Track</span>
        </h1>
        <h2 className="text-sm md:text-2xl font-semibold">
          Get in Touch – We're Here to Help
        </h2>
        <h3 className="text-sm md:text-lg px-8 md:px-16">
          Have questions, feedback, or need assistance? <br />
          Fill out the form below and our team will get back to you as soon as
          possible. We're always ready to support you on your journey.
        </h3>
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md my-10">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Contact HR / Admin
        </h2>
        <form action={handleMessage} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-primary rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-secondary rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="w-full border border-secondary rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-primary transition w-full cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
