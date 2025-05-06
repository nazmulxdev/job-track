import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "JobTrack | ContactUs";
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md my-10">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Contact HR / Admin
      </h2>
      <form className="space-y-4">
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
  );
};

export default ContactUs;
