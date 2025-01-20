import React, { createContext, useEffect, useState } from "react"; // Import useState and useEffect
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";

import { toast } from "react-toastify"; // Import toast
import axios from "axios";
import HOST from "../constant/HOST";

// create sign in with google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Create user state to store user data
  const [loading, setLoading] = useState(true); // Create loading state to determine if the app is loading
  const auth = getAuth(app); // Get the auth service for the app

  // Listen for authentication state to change.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user state when authentication state changes
      setLoading(false); // Set loading to false when authentication state is determined
    });
    return () => {
      unsubscribe(); // Cleanup the subscription on component unmount
    };
  }, [auth]);

  // login with google
  const LoginWithGoogle = async () => {
    setLoading(true);
    try {
      // Await the sign-in result
      const result = await signInWithPopup(auth, googleProvider);

      // Set user state
      setUser(result.user);

      // Send user data to the backend
      await axios.post(`${HOST}/client/register`, {
        email: result.user.email,
        name: result.user.displayName,
        password: result.user.email, // Use email as a placeholder password
        iconUrl: result.user.photoURL, // Use iconUrl to match backend expectations
      });

      console.log("User signed in and registered: ", result.user.photoURL);
      setLoading(false);
      return result.user;
    } catch (error) {
      console.error("Google login error:", error);
      setLoading(false);
    }
  };

  // login with email and password
  const signInUser = (email, password) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      if (!email) {
        reject("Email is required");
        return;
      }
      if (!password) {
        reject("Password is required");
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user); // Set the user state with the authenticated user
          console.log("User signed in: ", result.user); // Log the user data

          resolve(result.user); // Resolve the promise with the user data

          setLoading(false); // Set loading to false when authentication is successful
          return result.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          // console.error("Error signing in: " + errorMessage); // Log wrong credentials

          reject(errorMessage); // Reject the promise with the error message
          setLoading(false); // Set loading to false when authentication is unsuccessful
        });
    });
  };

  /// create account with email and password and name and photoURL
  const createAccount = (email, password, name, photoURL) => {
    setLoading(true);

    return new Promise((resolve, reject) => {
      if (!email) {
        setLoading(false);
        reject("Email is required");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          try {
            await updateProfile(result.user, {
              displayName: name,
              photoURL: photoURL,
            });

            setUser(result.user);
            resolve(result.user);
          } catch (error) {
            console.error("Error updating profile: " + error.message);
            toast.error("Error updating profile: " + error.message);
            reject(error.message);
          } finally {
            setLoading(false);
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error("Error creating account: " + errorMessage);
          toast.error("Error creating account: " + errorMessage);
          setLoading(false);
          reject(errorMessage);
        });
    });
  };

  // the update profile function
  const updateUserProfile = async (photoURL) => {
    try {
      await updateProfile(auth.currentUser, {
        photoURL: photoURL,
      });
      setUser(auth.currentUser);
    } catch (error) {
      console.error("Error updating profile: " + error.message);
      toast.error("Error updating profile: " + error.message);
    }
  };

  // logout user
  //
  const LogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during sign out:", error); // Log the error
    }
  };

  const value = {
    user,
    loading,
    LoginWithGoogle,
    signInUser,
    createAccount,
    LogOut,
    updateUserProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
