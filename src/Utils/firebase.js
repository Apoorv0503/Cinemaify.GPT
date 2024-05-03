// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzCMkf4D-pLWaLY7Vfkpkss8XnGv7Qxx4",
  authDomain: "netflixgpt-8d0f7.firebaseapp.com",
  projectId: "netflixgpt-8d0f7",
  storageBucket: "netflixgpt-8d0f7.appspot.com",
  messagingSenderId: "303908002414",
  appId: "1:303908002414:web:9fdcecd1b163c38047e47f",
  measurementId: "G-YCVNF851W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//since we are going to use this auth object everywhere in our firebase APIs, hence import it anywhere you need, reduce reduncdency
export const auth = getAuth();