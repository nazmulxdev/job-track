import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../Context/AuthContext";
import { auth } from "../FireBase/fireBase.config";

const UpdateProfile = () => {
  const { updateUser, setCurrentUser, sweetSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "JobTrack | UpdateProfile";
  }, []);

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUser(profile).then(() => {
      const successMessage = "You have updated your profile successfully";
      setCurrentUser(auth.currentUser);
      sweetSuccess(successMessage);
      navigate("/profile");
    });
  };
  return (
    <div className=" max-w-xl p-4 rounded-md shadow-2xl shadow-primary sm:p-8 mx-auto my-8">
      <h2 className="mb-3 text-3xl font-semibold text-center text-primary">
        Update Your Profile
      </h2>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-primary my-4" />
        <hr className="w-full border-t-2 border-primary my-4" />
      </div>
      <form onSubmit={handleProfileUpdate} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="your name"
              className="w-full px-3 py-2 border border-primary text-primary rounded-md "
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              PhotoURL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              required
              placeholder="your photoURL"
              className="w-full px-3 py-2 border border-primary text-primary rounded-md "
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white hover:cursor-pointer"
        >
          Update Profile
        </button>
      </form>
      <div className="flex items-center w-full my-4">
        <hr className="w-full border-t-2 border-primary my-4" />
        <hr className="w-full border-t-2 border-primary my-4" />
      </div>
      <p className="text-center">
        Have changed mind?{" "}
        <Link
          to="/profile"
          className="text-primary hover:underline hover:font-bold"
        >
          go back!!
        </Link>
      </p>
    </div>
  );
};

export default UpdateProfile;
