import React from "react";

const Avatar = ({ currentUser }) => {
  console.log(currentUser.photoURL);
  return (
    <div className="avatar avatar-online">
      <div className="w-8 sm:w-10 md:w-14 lg:w-16 xl:w-24 rounded-full">
        <img src={currentUser.photoURL} />
      </div>
    </div>
  );
};

export default Avatar;
