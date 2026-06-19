// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crackr-713b3.firebaseapp.com",
  projectId: "crackr-713b3",
  storageBucket: "crackr-713b3.firebasestorage.app",
  messagingSenderId: "735274508587",
  appId: "1:735274508587:web:3359d0190a2db26aad656e",
  measurementId: "G-EM6CREH87H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();


const analytics = getAnalytics(app);

export { auth, provider, analytics };