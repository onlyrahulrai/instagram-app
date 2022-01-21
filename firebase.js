// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn6fTv0pBCxODgIXooJRa36biICTiBBoI",
  authDomain: "mail-password-auth.firebaseapp.com",
  projectId: "mail-password-auth",
  storageBucket: "mail-password-auth.appspot.com",
  messagingSenderId: "607058138251",
  appId: "1:607058138251:web:6ddc3366e916185514308e"
}


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export {app,db,storage}

