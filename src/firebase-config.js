// Import the functions you need from the SDKimport firebase from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRry18b74p1Sc4W690mItyt0k8D0TL1xs",
  authDomain: "insightful-fed3f.firebaseapp.com",
  projectId: "insightful-fed3f",
  storageBucket: "insightful-fed3f.appspot.com",
  messagingSenderId: "961726372206",
  appId: "1:961726372206:web:9a3c7bdc1d6e9a5fb2097f",
  measurementId: "G-HHE4DJ8WV4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(app);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  blogs: firestore.collection("blogs"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();
