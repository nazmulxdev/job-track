import React from "react";
import { PacmanLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoaderDiv = () => {
  return (
    <div className="xl:px-40 lg:px-32 md:px-20 sm:px-10 px-5 mx-auto my-12">
      <PacmanLoader cssOverride={override} color="#8f00ff" size={60} />
    </div>
  );
};

export default LoaderDiv;
