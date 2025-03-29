// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBc8R8toactVpm2GqYGLojQD9nCTID61u8",
    authDomain: "adv-metrics-443af.firebaseapp.com",
    projectId: "adv-metrics-443af",
    storageBucket: "adv-metrics-443af.appspot.com", // corrected URL
    messagingSenderId: "9622324912",
    appId: "1:9622324912:web:40e3e58149bede1033dd75",
    measurementId: "G-SR3TG328SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
