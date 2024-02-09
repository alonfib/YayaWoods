import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMrvubOfGNQpqnWrQIeR9x8hMWwc4La0o",
  authDomain: "yayawoods-6f6f3.firebaseapp.com",
  projectId: "yayawoods-6f6f3",
  storageBucket: "yayawoods-6f6f3.appspot.com",
  messagingSenderId: "530579549551",
  appId: "1:530579549551:web:dc1b76fca535d5c6114c9a",
  measurementId: "G-YED4MMSQJP",
};

// Your firebaseConfig object here

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
setPersistence(firebaseAuth, browserLocalPersistence);

export const firebaseDb = getFirestore(firebaseApp);

// Initialize Firebase
export const analytics = getAnalytics(firebaseApp);
