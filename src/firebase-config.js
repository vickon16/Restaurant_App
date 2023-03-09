// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "restaurant-app-9baf1.firebaseapp.com",
  databaseURL: "https://restaurant-app-9baf1-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-9baf1",
  storageBucket: "restaurant-app-9baf1.appspot.com",
  messagingSenderId: "564819295288",
  appId: "1:564819295288:web:133049c823ba328956facd",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// google provider
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const collectionRef = collection(db, "foodItems");

export {app, auth, provider, db, storage, collectionRef};
