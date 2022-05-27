// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAltVkWTTsWFeZczaTo1hU4QqVZgTBHIus",
  authDomain: "fruit-warehouse2.firebaseapp.com",
  projectId: "fruit-warehouse2",
  storageBucket: "fruit-warehouse2.appspot.com",
  messagingSenderId: "993038583270",
  appId: "1:993038583270:web:2c25722d69a3f1b89dc227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;