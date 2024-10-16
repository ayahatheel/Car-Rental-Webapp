import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
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
const auth = getAuth(app);

// Example of using analytics
logEvent(analytics, 'notification_received');

export { app, auth, analytics };
