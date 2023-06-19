// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU-t9kszuEeywlAIZ9ZK0d0rX66dkuH2E",
  authDomain: "twitter-clone-1ea5a.firebaseapp.com",
  projectId: "twitter-clone-1ea5a",
  storageBucket: "twitter-clone-1ea5a.appspot.com",
  messagingSenderId: "884270491276",
  appId: "1:884270491276:web:34d84022782551c9d0fda9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()