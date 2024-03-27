
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "virender---blog.firebaseapp.com",
  projectId: "virender---blog",
  storageBucket: "virender---blog.appspot.com",
  messagingSenderId: "479489406773",
  appId: "1:479489406773:web:808d0f9c79e7e5052f3e7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);