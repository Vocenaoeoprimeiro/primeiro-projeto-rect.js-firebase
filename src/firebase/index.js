import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const firebaseapp  = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { auth, db }
