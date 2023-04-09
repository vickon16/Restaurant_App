// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "restaurantapp-7cfb6.firebaseapp.com",
  projectId: "restaurantapp-7cfb6",
  storageBucket: "restaurantapp-7cfb6.appspot.com",
  messagingSenderId: "426676096299",
  appId: "1:426676096299:web:396c098619d810c25d496e"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// google provider
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const collectionFoodRef = collection(db, "foodItems");
const collectionCartRef = collection(db, "cartItems");

export {app, auth, provider, db, storage, collectionFoodRef, collectionCartRef};
