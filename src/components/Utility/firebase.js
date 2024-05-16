
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBcX6lJ1AzaLzyEMLkN3ooMVTSgSTmIFro",
  authDomain: "mensclub-da2c7.firebaseapp.com",
  projectId: "mensclub-da2c7",
  storageBucket: "mensclub-da2c7.appspot.com",
  messagingSenderId: "734095876477",
  appId: "1:734095876477:web:326d790fca5fb9fc0d6c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDb = getStorage(app);

export {imgDb};