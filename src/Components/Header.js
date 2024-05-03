import React from "react";
import Netflix from "../Assests/Netflix_Logo_PMS.png";
// import userIcon from "../Assests/userIcon.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utils/userSlice";

const Header = () => {
  // for routing purpose
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        console.log("current condition of user: ", auth.currentUser);

        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Netflix} alt="logo-img" />

      {user && (
        <div className="py-2 px-6 flex flex-col items-center">
          <img
            src={user.photoURL}
            // "https://occ-0-5277-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
            className="w-12 h-12"
            alt="user_icon"
          />
          <button className="text-white font-semibold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
