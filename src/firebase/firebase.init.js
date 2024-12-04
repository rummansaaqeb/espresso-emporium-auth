// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCi7ssslT5Kcw0DRl5YeH8vf9G3_zyXV0",
  authDomain: "coffee-store-93826.firebaseapp.com",
  projectId: "coffee-store-93826",
  storageBucket: "coffee-store-93826.firebasestorage.app",
  messagingSenderId: "723014362642",
  appId: "1:723014362642:web:9ebb54b7d156376ad39acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);