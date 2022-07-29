import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCGDi8Qm1ehkajNi23v-L2LGizR8-uDSt8",
  authDomain: "recipe-app-877c3.firebaseapp.com",
  projectId: "recipe-app-877c3",
  storageBucket: "recipe-app-877c3.appspot.com",
  messagingSenderId: "182464429789",
  appId: "1:182464429789:web:15c2fc0e83ab6f1d362534",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//DB
export const db = getFirestore(app);

//auth
export const auth = getAuth(app);

//provider
export const provider = new GoogleAuthProvider(app);

export const storage = getStorage(app);
