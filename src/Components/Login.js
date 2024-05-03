import React, { useState, useRef } from "react";
import Header from "./Header";
import HomeBackground from "../Assests/homeBackground.jpg";
import checkValidData from "../Utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
// import apoorvaDP from "../Assests/apoorvaDP.png"
import {auth} from "../Utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate=useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  // We are using the useRef to create a variable that is referring to the particular input tags on the page
  //we can use RefVariable.current.value to get the value given as input by the user.
  const name = useRef(null); //for name input field
  const email = useRef(null); //for email
  const password = useRef(null); //for password

  const toggleSignInForm = () => {
    setErrorMessage(null);
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const emailEntered = email.current.value;
    const passwordEntered = password.current.value;

    //validation part
    const message = checkValidData(emailEntered, passwordEntered);

    setErrorMessage(message);
    if (message) {
      return;
    }

    //if we are not on the sign-in page , then sign up
    //sign up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailEntered, passwordEntered)
        .then((userCredential) => {
          const user = userCredential.user;

//adding some desired fields to the recieved user object, updating the user recieved after sign-up
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/55045256?v=4"
          }).then(() => {
            //on succesful updation, extract the values from latest user (auth.currentUser, not the "user" in line 49)
            //and dispatch an addUser action again to update the user in tha store (need to update its displayName and photoURL)
  
            const{uid, email, displayName, photoURL}=auth.currentUser;
            
            dispatch(
              // passing the payload to the adduser action's reducer function
              addUser({
                uid:uid, email:email, displayName:displayName, photoURL:photoURL,
              })
            );

          }).catch((error) => {
              setErrorMessage(error.message);
              // navigate("/error");
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorMessage);
        });
    }
    //if we are on the sing-in page, sign in logic
    else {
      signInWithEmailAndPassword(auth, emailEntered, passwordEntered)
        .then((userCredential) => {

          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          setErrorMessage(errorMessage);

        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={HomeBackground} alt="home-background" />
      </div>
      <form
        className="absolute w-3/12 p-12  my-36 right-0 left-0 mx-auto  text-white bg-black bg-opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="bg-gray-800 my-4 p-4 w-full border-solid border-[0.5px] border-gray-500 rounded-md"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="bg-gray-800 my-4 p-4 w-full border-solid border-[0.5px] border-gray-500 rounded-md"
          placeholder="Email or Phone"
        />
        <input
          ref={password}
          type="password"
          className="bg-gray-800 my-4 p-4 w-full border-solid border-[0.5px] border-gray-500 rounded-md"
          placeholder="Password"
        />

        {!isSignInForm && (
          <input
            type="text"
            className="bg-gray-800 my-4 p-4 w-full border-solid border-[0.5px] border-gray-500 rounded-md"
            placeholder="Confirm Password"
          />
        )}

        <p className="text-red-500 font-semibold text-md py-2">
          {errorMessage}
        </p>

        <button
          className="my-6 py-2 px-4 w-full font-bold bg-red-600 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? sign up now!"
            : "Already registered? Sign in now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
