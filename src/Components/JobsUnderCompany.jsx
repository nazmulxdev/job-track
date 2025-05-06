import React, { useState } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router";
import JobModal from "./JobModal";

const JobsUnderCompany = ({ job, companyWebsite  }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className=" xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-start gap-16 border rounded-2xl  border-accent p-8 shadow-xl ">
        <img
          src={job.bannerImage}
          alt={job.title}
          className=" object-cover rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-primary">{job.title}</h2>
          <div className="items-center text-xl gap-4 text-gray-600 space-y-2 my-2">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <FaBriefcase /> {job.jobType}
            </span>
            <span className="flex items-center gap-1">
              <FaDollarSign /> {job.salary}
            </span>
          </div>
          <p className="text-gray-700">{job.description}</p>
          <button
            onClick={handleOpenModal}
            className="btn btn-primary w-full mt-4"
          >
            View Details
          </button>
          <JobModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            job={job}
            companyWebsite={ companyWebsite }
          ></JobModal>
        </div>
      </div>
    </div>
  );
};

export default JobsUnderCompany;

/**
 * 
 * job requirements
 * <div>
            <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>
 * 
 * 
 * 
 * 
 * ***/
