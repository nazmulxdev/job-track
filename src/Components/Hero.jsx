import React from "react";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className=" xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12">
      <div className="grid grid-cols-2 justify-center bg-[#f0ede9] rounded-2xl">
        <div className="p-16 my-auto">
          <h1 className="font-bold text-2xl mb-4">
            <span className="text-3xl">Job Track!!</span> <br />
            <br />
            Find Your Next{" "}
            <span className="text-primary">Great Opportunity</span>
          </h1>
          <p className="font-medium text-lg">
            Discover career opportunities at top companies. Easily search and
            filter by role, location, or industry to find the job that fits you
            best—all in one place.
          </p>
        </div>
        <div>
          <img
            className="rounded-br-2xl rounded-tr-2xl h-full mb-0"
            src={heroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
