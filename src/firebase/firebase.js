// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFHXQvIj3-Br5DZ_HTuC1jT1a7H-nJq0o",
  authDomain: "iraqiwheels-3acf3.firebaseapp.com",
  projectId: "iraqiwheels-3acf3",
  storageBucket: "iraqiwheels-3acf3.appspot.com",
  messagingSenderId: "456449866267",
  appId: "1:456449866267:web:67f33d6087ae8f041d16be",
  measurementId: "G-CH3N9FYS44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth}