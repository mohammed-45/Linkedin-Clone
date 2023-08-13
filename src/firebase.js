import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeKZNfKDCJosW1dxNwCmtdUZvWrv60FAM",
  authDomain: "linkedin-clone-80499.firebaseapp.com",
  projectId: "linkedin-clone-80499",
  storageBucket: "linkedin-clone-80499.appspot.com",
  messagingSenderId: "443711965297",
  appId: "1:443711965297:web:60bb2664cc681c3371b3d0",
  measurementId: "G-M7G19QQKH7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, db, provider, storage };