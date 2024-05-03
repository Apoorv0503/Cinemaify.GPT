import React, {useEffect} from "react";
import Netflix from "../Assests/Netflix_Logo_PMS.png";
// import userIcon from "../Assests/userIcon.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  // for routing purpose
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);


  //read note for this
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("onAuthStateChanged runs");
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
 //navigation is not possible from here, bcz we did not made <app /> as root file, <body /> is our main component for now hence routing config is applied after here
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

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
