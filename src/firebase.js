// src/firebase.js
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQpWt7CYlZh9Q25nDRViu4KJWRM6RR3w",
  authDomain: "audyn-a6917.firebaseapp.com",
  projectId: "audyn-a6917",
  storageBucket: "audyn-a6917.appspot.com",
  messagingSenderId: "450898080595",
  appId: "1:450898080595:web:8458d0bc18691163af67a6",
  measurementId: "G-JLJV2S2HDT"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export required services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, analytics };*/


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ ADD THIS

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQpWt7CYlZh9Q25nDRViu4KJWRM6RR3w",
  authDomain: "audyn-a6917.firebaseapp.com",
  projectId: "audyn-a6917",
  storageBucket: "audyn-a6917.appspot.com", // ✅ Make sure this is correct
  messagingSenderId: "450898080595",
  appId: "1:450898080595:web:8458d0bc18691163af67a6",
  measurementId: "G-JLJV2S2HDT"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export required services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app); // ✅ ADD THIS LINE

export { auth, provider, db, analytics, storage }; // ✅ ADD `storage` HERE
