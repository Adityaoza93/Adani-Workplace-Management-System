import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" ;
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCEhBB9MkPfCNzJC6pWuB6mzdJrNGJ121s",
  authDomain: "fir-chat-app-853ed.firebaseapp.com",
  projectId: "fir-chat-app-853ed",
  storageBucket: "fir-chat-app-853ed.appspot.com",
  messagingSenderId: "1087910564283",
  appId: "1:1087910564283:web:e3da47896c4bc13145749e"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);