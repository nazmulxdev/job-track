import React from "react";
import { FaBuilding, FaPage4, FaPagelines, FaRocket } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FcViewDetails } from "react-icons/fc";

const WebsiteDetails = () => {
  return (
    <div className="xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12 text-center">
      <h1 className="font-bold text-4xl mt-18 text-center">
        How
        <span className="text-primary">JobTrack</span> Works
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center space-y-4">
          <div className="flex justify-center text-4xl text-primary mb-4">
            <FaMagnifyingGlass></FaMagnifyingGlass>
          </div>
          <h3 className="text-xl font-semibold mb-2">Browse JobTrack</h3>
          <p className="text-gray-600 text-sm">
            Explore thousands of verified job listings from top companies.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center space-y-4">
          <div className="flex justify-center text-4xl text-primary mb-4">
            <FaBuilding></FaBuilding>
          </div>
          <h3 className="text-xl font-semibold mb-2">View Company Details</h3>
          <p className="text-gray-600 text-sm">
            Check company profiles, their culture, benefits, and available
            roles.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center text-4xl text-primary mb-4">
            <FcViewDetails></FcViewDetails>
          </div>
          <h3 className="text-xl font-semibold mb-2">Read Job Details</h3>
          <p className="text-gray-600 text-sm">
            Get full descriptions, requirements, salaries, and job types clearly
            listed.
          </p>
        </div>
        <div className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center text-4xl text-primary mb-4">
            <FaRocket></FaRocket>
          </div>
          <h3 className="text-xl font-semibold mb-2">Apply Instantly</h3>
          <p className="text-gray-600 text-sm">
            Click apply and get redirected to the company’s official website to
            submit your application.
          </p>
        </div>
      </div>
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Browse JobTrack</li>
        <li className="step step-primary">View Company Details</li>
        <li className="step"> Read Job Details</li>
        <li className="step">Apply Instantly</li>
      </ul>
    </div>
  );
};

export default WebsiteDetails;
