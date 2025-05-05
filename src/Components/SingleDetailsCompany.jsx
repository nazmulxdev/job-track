import React from "react";
import { FaGlobe, FaIndustry, FaMapMarkerAlt } from "react-icons/fa";

const SingleDetailsCompany = ({ singleCompany }) => {
  return (
    <div className=" xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12 ">
      <div className="rounded-2xl shadow-2xl px-32 py-16 flex items-center justify-between flex-col bg-[#f0ede9]">
        <img
          src={singleCompany.logo}
          alt={singleCompany.name}
          className="mx-auto w-96 h-96 object-contain rounded-lg"
        />

        <div className="flex-1 space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
            {singleCompany.name}
          </h2>
          <div className="flex items-center text-gray-600 gap-2 text-xl sm:text-2xl md:text-3xl text-wrap">
            <FaMapMarkerAlt className="text-secondary" />
            <span>{singleCompany.location}</span>
          </div>
          <div className="flex items-center text-gray-600 gap-2 text-xl sm:text-2xl md:text-3xl">
            <FaIndustry className="text-secondary" />
            <span>{singleCompany.industry}</span>
          </div>
          <div className="flex items-center text-gray-600 gap-2 text-xl sm:text-2xl md:text-3xl">
            <FaGlobe className="text-secondary" />
            <a
              href={singleCompany.website}
              className="hover:underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {singleCompany.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetailsCompany;
