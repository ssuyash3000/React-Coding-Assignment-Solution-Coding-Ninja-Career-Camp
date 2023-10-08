// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg7bEmn5NNIyReciKxqpUe0cZZSzdDvKg",
  authDomain: "expense-tracker-4bff6.firebaseapp.com",
  projectId: "expense-tracker-4bff6",
  storageBucket: "expense-tracker-4bff6.appspot.com",
  messagingSenderId: "164009832492",
  appId: "1:164009832492:web:fdca6edf2f218b2a50e189",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
