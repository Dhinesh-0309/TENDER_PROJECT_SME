// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1absFTbQ9aRBHihMtKr1rWpLIDL_5Go",
  authDomain: "sme-tender.firebaseapp.com",
  projectId: "sme-tender",
  storageBucket: "sme-tender.appspot.com",  // ✅ Fixed storage bucket URL
  messagingSenderId: "610050469181",
  appId: "1:610050469181:web:3ee7c82abf66b7d70aa954",
  measurementId: "G-K0SF6GE47M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);  // ✅ Initialize Firestore

// Export both auth & db
export { auth, db };
