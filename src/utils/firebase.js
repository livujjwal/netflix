// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_NFmA7NVPjN8nRc8F6ySk5QnlX5xqWQg",
  authDomain: "netflixgpt-af71b.firebaseapp.com",
  projectId: "netflixgpt-af71b",
  storageBucket: "netflixgpt-af71b.appspot.com",
  messagingSenderId: "849213794737",
  appId: "1:849213794737:web:6900414f728f140dc83590",
  measurementId: "G-1BQ090X6LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// PS C:\Users\Ujjwal Singh\AppData\Roaming\npm\firebase.ps1