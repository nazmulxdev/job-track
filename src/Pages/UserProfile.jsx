import React, { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { useLocation, useNavigation } from "react-router";

const UserProfile = () => {
  const { logOut, currentUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigation();
  const handleLogOut = () => {
    logOut().then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  console.log(currentUser);
  useEffect(() => {
    document.title = "JobTrack | Profile";
  }, []);
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg my-10">
      <div className="text-center">
        <img
          src={currentUser.photoURL || "https://i.ibb.co/0GF8Ydx/user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-violet-500"
        />
        <h2 className="text-xl font-semibold text-violet-600">
          {currentUser.displayName || "No Name"}
        </h2>
        <p className="text-gray-600">{currentUser.email}</p>
      </div>
      <div className="mt-6 flex justify-between">
        <button className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">
          Update Profile
        </button>
        <button
          onClick={handleLogOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
