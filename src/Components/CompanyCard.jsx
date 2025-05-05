import React, { use } from "react";

import { motion } from "motion/react";
import { Link } from "react-router";

const companyPromise = fetch("/job-company.json").then((data) => data.json());

const CompanyCard = () => {
  const companyJob = use(companyPromise);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mx-auto justify-center gap-8 text-center my-16">
      {companyJob.map((company, index) => (
        <Link key={index} to={`/company/${company.id}`}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer border border-accent rounded-lg p-8 bg-[#f0ede9] h-60"
          >
            <div className="flex items-center justify-center flex-col">
              <div>
                <img className="w-32 mx-auto" src={company.logo} alt="" />
              </div>
              <h1 className="font-bold text-lg my-4">{company.name}</h1>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default CompanyCard;
