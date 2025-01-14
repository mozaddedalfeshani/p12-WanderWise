import React, { createContext, useEffect, useState } from "react"; // Import useState and useEffect
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";
import { set } from "react-hook-form";
import { toast } from "react-toastify"; // Import toast

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

  const LoginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setLoading(false);
      return result.user;
    } catch (error) {
      console.log(error);
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

          resolve(result.user); // Resolve the promise with the user data

          setLoading(false); // Set loading to false when authentication is successful
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error("Error signing in: " + errorMessage); // Log wrong credentials

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

  const value = {
    user,
    loading,
    LoginWithGoogle,
    signInUser,
    createAccount,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
