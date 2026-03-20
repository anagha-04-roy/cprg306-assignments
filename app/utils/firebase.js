import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAzspyTfl610vwedt4AdChxyLyVr8c096w",
//   authDomain: "cprg306assignment-week9-anagha.firebaseapp.com",
//   projectId: "cprg306assignment-week9-anagha",
//   storageBucket: "cprg306assignment-week9-anagha.firebasestorage.app",
//   messagingSenderId: "435850657662",
//   appId: "1:435850657662:web:b79a2d4df75c9978603d2f"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);