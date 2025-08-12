// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTFWu4pWPn_fWuhJeZNnGi0L4G39ruLAE",
  authDomain: "simple-firebase-ebb54.firebaseapp.com",
  projectId: "simple-firebase-ebb54",
  storageBucket: "simple-firebase-ebb54.firebasestorage.app",
  messagingSenderId: "461104381968",
  appId: "1:461104381968:web:ad579c976cd60fa56d4a95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
