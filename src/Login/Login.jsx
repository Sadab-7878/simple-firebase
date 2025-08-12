import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.init";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const [user, setuser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);

        setuser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setuser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setuser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setuser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Sign out successfully");
        setuser(null);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut} className="ml-2 cursor-pointer">
          Sign Out
        </button>
      ) : (
        <div className="flex flex-col gap-4">
          <button className="cursor-pointer" onClick={handleGoogleSignIn}>
            Login with Google
          </button>

          <button className="cursor-pointer" onClick={handleGithubSignIn}>Login with Github</button>
        </div>
      )}

      {user && (
        <div>
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="User"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          )}
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
