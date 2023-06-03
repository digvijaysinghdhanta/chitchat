import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBov9A6yjZg3bUadYkNMgRiHMXiUsy6AlY",
  authDomain: "chit-chat-03.firebaseapp.com",
  projectId: "chit-chat-03",
  storageBucket: "chit-chat-03.appspot.com",
  messagingSenderId: "368808045932",
  appId: "1:368808045932:web:7d4d4e9f81beeb00bd9749"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();