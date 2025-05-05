import React from "react";

const Avatar = ({ url }) => {
  const photoUrl = url;
  // console.log(photoUrl);
  return (
    <div className="avatar avatar-online">
      <div className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 rounded-full">
        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
      </div>
    </div>
  );
};

export default Avatar;
