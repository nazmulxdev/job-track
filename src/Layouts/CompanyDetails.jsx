import React, { Suspense, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Link, useLoaderData, useParams } from "react-router";
import SingleDetailsCompany from "../Components/SingleDetailsCompany";
import LoaderDiv from "../Components/LoaderDiv";
import JobsUnderCompany from "../Components/JobsUnderCompany";
import { FaArrowLeft } from "react-icons/fa";

const CompanyDetails = () => {
  const { id } = useParams();
  const companyData = useLoaderData();
  const [singleCompany, setSingleCompany] = useState({});
  useEffect(() => {
    const company = companyData.find(
      (detailsCompany) => detailsCompany.id === id
    );
    setSingleCompany(company);
    document.title = `JobTrack | ${company.name}`;
  }, [id, companyData]);
  return (
    <div>
      <Suspense fallback={<LoaderDiv></LoaderDiv>}>
        <SingleDetailsCompany
          singleCompany={singleCompany}
        ></SingleDetailsCompany>
      </Suspense>
      <div className=" xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12">
        <h1 className="font-bold text-4xl mt-18 text-center">
          Open Positions at{" "}
          <span className="text-primary"> {singleCompany.name}</span> Solutions
        </h1>
        {singleCompany?.jobs?.map((job) => (
          <JobsUnderCompany
            key={job.id}
            job={job}
            companyWebsite={singleCompany.website}
          />
        ))}
      </div>
      <div className=" xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12 flex items-center justify-center">
        <Link to="/" className="btn btn-primary max-w-sm">
          {" "}
          <FaArrowLeft></FaArrowLeft>
          Go to previous page
        </Link>
      </div>
    </div>
  );
};

export default CompanyDetails;
