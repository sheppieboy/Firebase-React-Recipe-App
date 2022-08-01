import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //add firebase config
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
