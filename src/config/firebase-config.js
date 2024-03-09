// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDdEZg4Z2Xx7nwfELB46RafyAxJzjM0xIM",
  authDomain: "expensetrack-7fe2c.firebaseapp.com",
  projectId: "expensetrack-7fe2c",
  storageBucket: "expensetrack-7fe2c.appspot.com",
  messagingSenderId: "512154513119",
  appId: "1:512154513119:web:3c2325fe429c5eeba0436a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);