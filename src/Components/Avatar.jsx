import React from "react";

const Avatar = ({ currentUser }) => {
  console.log(currentUser.photoURL);
  return (
    <div className="avatar avatar-online">
      <div className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 rounded-full">
        <img src={currentUser.photoURL} />
      </div>
    </div>
  );
};

export default Avatar;
