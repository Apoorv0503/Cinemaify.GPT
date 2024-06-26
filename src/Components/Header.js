import React, {useEffect} from "react";
import Netflix from "../Assests/Netflix_Logo_PMS.png";
// import userIcon from "../Assests/userIcon.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import profile from "../Assests/profile-icon.png";

const Header = () => {
  // for routing purpose
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);


  //read note for this
  useEffect(() => {
    // this onAuthStateChanged is a kind of event Listener which will listen to the Auth state changes of user, but with some modification
    //we can call an "unsubscribe" function also to unsubscribe to this event listener when header component unmounts from DOM.

    const unsubscribe =onAuthStateChanged(auth, (user) => {
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
 //navigation was not possible from the body, bcz we did not made <app /> as root file, <body /> is our main component for now, hence routing is possible only inside its children
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //clean up logic
    return ()=> unsubscribe();
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
            // src={user?.photoURL} we will use default netflix profile icon for now
            src={profile}
            className="w-10 h-10 rounded-sm"
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
