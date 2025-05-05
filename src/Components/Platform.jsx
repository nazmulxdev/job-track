import React from "react";
import magnifyingGlass from "../assets/icons8-magnifying-glass-96.png";
import speechBalloon from "../assets/Speech Balloon.png";
import pageFacingUp from "../assets/Page Facing Up.png";
import bustsInSilhouette from "../assets/Busts in Silhouette.png";
import officeBuilding from "../assets/Office Building.png";
import trophy from "../assets/Trophy.png";

const Platform = () => {
  return (
    <div className="xl:px-40 lg:px-30 md:px-20 sm:px-10 px-5 mx-auto my-12">
      <h1 className="font-bold text-4xl mt-18 text-center">
        <span className="text-primary">JobTrack</span> by the Numbers
      </h1>
      <p className="p-8 text-xl font-medium text-center mb-4">
        Here’s a quick look at how JobTrack is helping connect job seekers with
        top companies. These numbers reflect the strength of our growing
        community and the impact we’re making together.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around items-center gap-8">
        <div className="border border-accent rounded-xl p-8 shadow-2xl">
          <img src={magnifyingGlass} alt="" />

          <p className="font-bold text-5xl text-primary mt-4">48+</p>
          <h1 className="font-medium text-2xl my-4">Active Job Listings</h1>
        </div>
        <div className="border border-accent rounded-xl p-8 shadow-2xl">
          <img src={trophy} alt="" />
          <p className="font-bold text-5xl text-primary mt-4">27+</p>
          <h1 className="font-medium text-2xl my-4">Successful Hires</h1>
        </div>
        <div className="border border-accent rounded-xl p-8 shadow-2xl">
          <img src={officeBuilding} alt="" />
          <p className="font-bold text-5xl text-primary mt-4">15+</p>
          <h1 className="font-medium text-2xl my-4"> Partner Companies</h1>
        </div>

        <div className="border border-accent rounded-xl p-8 shadow-2xl">
          <img src={bustsInSilhouette} alt="" />
          <p className="font-bold text-5xl text-primary mt-4">742+</p>
          <h1 className="font-medium text-2xl my-4">Verified Members</h1>
        </div>
        <div className="border border-accent rounded-xl p-8 shadow-2xl">
          <img src={pageFacingUp} alt="" />
          <p className="font-bold text-5xl text-primary mt-4">321+</p>
          <h1 className="font-medium text-2xl my-4"> Resumes Uploaded</h1>
        </div>
        <div className="border border-accent rounded-xl p-8 shadow-2xl">
          <img src={speechBalloon} alt="" />
          <p className="font-bold text-5xl text-primary mt-4">1820+</p>
          <h1 className="font-medium text-2xl my-4">Messages Exchanged</h1>
        </div>
      </div>
    </div>
  );
};

export default Platform;
