import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrw9WcrqI0H0FzWKdD6N6CzcTfuJYWir4",
  authDomain: "journalappreact-a620d.firebaseapp.com",
  projectId: "journalappreact-a620d",
  storageBucket: "journalappreact-a620d.appspot.com",
  messagingSenderId: "801618056778",
  appId: "1:801618056778:web:074af03ccd0d56c25438b3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
