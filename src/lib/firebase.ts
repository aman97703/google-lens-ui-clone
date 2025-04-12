// src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKjrP1hfQ_EFl_yyAVqwELUUq-Cx3MN9A",
  authDomain: "lens-ui.firebaseapp.com",
  projectId: "lens-ui",
  storageBucket: "lens-ui.firebasestorage.app",
  messagingSenderId: "463591384637",
  appId: "1:463591384637:web:f47c1208808c450ae62c54",
  measurementId: "G-31RE8GXSC0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
