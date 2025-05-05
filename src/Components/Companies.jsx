import React, { Suspense } from "react";
import CompanyCard from "./companyCard";
import LoaderDiv from "./LoaderDiv";

const Companies = () => {
  return (
    <div className=" xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12">
      <h1 className="font-bold text-2xl mb-4 text-center">
        <span className="text-primary">Explore</span> Jobs at Leading Companies
      </h1>
      <p className="font-medium text-lg text-center">
        Discover top companies actively hiring across various roles and
        industries. Click on a company to view available positions.
      </p>
      <Suspense fallback={<LoaderDiv></LoaderDiv>}>
        <CompanyCard></CompanyCard>
      </Suspense>
    </div>
  );
};

export default Companies;

/**
 *  xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12
 *
 * */
