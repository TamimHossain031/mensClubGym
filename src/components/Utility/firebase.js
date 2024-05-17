import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBh32tXZICx4xEeGcKj_FIQaySgMOpk1UU",

  authDomain: "gym123-3ceb9.firebaseapp.com",

  projectId: "gym123-3ceb9",

  storageBucket: "gym123-3ceb9.appspot.com",

  messagingSenderId: "512191266972",

  appId: "1:512191266972:web:5868e62f744b4ef284ad59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDb = getStorage(app);
const db = getFirestore(app);

const addData = async (data) => {
  let id = await getId().then((result) => {
    let newid = result + 1;

    
    setDoc(doc(db, "client", newid.toString()), {
      ...data,
      timestamp: serverTimestamp(),
    }).then((restult) => {
      return true;
    });
  });
};

const getId = async () => {
  let id = [];
  await getDocs(collection(db, "client")).then((data) => {
    data.forEach((single) => id.push(Number(single.id)));
  });

  return id.length == 0 ? 1000 : Math.max(...id);
};

export { addData, imgDb };
