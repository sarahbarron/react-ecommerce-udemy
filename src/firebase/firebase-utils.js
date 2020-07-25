import firebase from "firebase/app";
// for the database
import "firebase/firestore";
// for the auth
import "firebase/auth";

/* Utilities for Firebase authentication and Database storage of users
 */

// configuration of firebase
const config = {
  apiKey: "AIzaSyCDUfMHVnFvQFKVAkjoYGtZyf6da-3Kghc",
  authDomain: "authentication-db-288dc.firebaseapp.com",
  databaseURL: "https://authentication-db-288dc.firebaseio.com",
  projectId: "authentication-db-288dc",
  storageBucket: "authentication-db-288dc.appspot.com",
  messagingSenderId: "83163694661",
  appId: "1:83163694661:web:78acd2a0d326388538c52c",
  measurementId: "G-L46K506TKQ",
};

firebase.initializeApp(config);

// userAuth is the user object returned from google
// If the user has logged in successfully the userAuth will be the object
// If they have been unsuccessful it will be null
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if userAuth is null do nothing & exit
  if (!userAuth) return;

  // If the user has been authenticated by google

  // get the the user ID and assign it to userRef
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Using the User Id get the snapShot object
  const snapShot = await userRef.get();

  // The snapShot has an exists property if the google uid already exists in our database
  // it will return true otherwise it will return false

  // if it doesn't exist create a new user in our db
  if (!snapShot.exists) {
    // we need the displayName and email from the userAuth object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // creates a user with name, email, date created and all the other props passed in
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating a new user: ", e);
    }
  }

  return userRef;
};

// configuring the firebase for google auth

// export these out to be used anywhere we need authentication or the db
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setup google auth utility
const provider = new firebase.auth.GoogleAuthProvider();

// This takes some custom parameters - always trigger the google popup
provider.setCustomParameters({ prompt: "select_account" });

// signInWithPopUp can be used for many providers. I am passing
// in the Google provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
