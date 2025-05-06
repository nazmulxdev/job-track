import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const JobModal = ({ isOpen, onClose, job, companyWebsite }) => {
  const modalRef = useRef();
  const overlayRef = useRef();
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [isOpen]);

  if (!isOpen || !job) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-2xl border border-primary"
      >
        <h2 className="text-2xl font-bold text-primary mb-3">{job.title}</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Location:</span> {job.location}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Job Type:</span> {job.jobType}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Salary:</span> {job.salary}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-gray-800">Description:</h4>
          <p className="text-gray-700 text-sm">{job.description}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-gray-800">Requirements:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {job.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-around gap-3 pt-4 border-t border-gray-200">
          <a
            href={companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Apply
          </a>
          <button onClick={onClose} className="btn btn-primary btn-outline">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
