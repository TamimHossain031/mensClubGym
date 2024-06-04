import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,updatePassword,sendPasswordResetEmail,signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where
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
const auth = getAuth(app);
const imgDb = getStorage(app);
const db = getFirestore(app);

let singleData = {};

const addData = async (data) => {
  let id = await getId().then((result) => {
    let newid = result + 1;

    setDoc(doc(db, "client", newid.toString()), {
      ...data,
      timestamp: serverTimestamp(),
      id: newid,
      payments: [],
      due:[]
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

const getData = async (section = 'client') => {
  const allData = await getDocs(collection(db, section)).then((data) => {
    return data;
  });
  return allData;
};

const getUpdateData = onSnapshot(collection(db,'client'),(docs)=>{
    return docs;
})

const updatePayment = async (id, data) => {
  const documentRef = doc(db, "client", id);
  await updateDoc(documentRef, {
    payments: data,    
  }).then((res) => getSingleData(id));
};

const getSingleData = async (id) => {
  const docSnap = await getDoc(doc(db, "client", id)).then((res) => res.data());

  singleData = docSnap;

  
};

const showData = () => {
  return singleData;
};

const upDateDue = async(id,due)=>{
  const documentRef = doc(db, "client", id);
  await updateDoc(documentRef, {
    due:due
  })
}

const deleteData = async(id,location)=>{
  await deleteDoc(doc(db,location,id));
}

const signIn= async(email,password)=>{
 return await signInWithEmailAndPassword(auth,email,password) ;
  
}

const updateAdminPass=(update,email)=>{
  const user = auth.currentUser;
  sendPasswordResetEmail(auth,email).then(res=>console.log(res))
  
 
}

const addEmploe=async(data)=>{
 await setDoc(doc(db, "employe",data.userId ), {
   ...data
  }).then((restult) => {
    return true;
  });


 
}

const adminSignOut=()=>{
 return signOut(auth)
}

const anotherLogin=async(name,password)=>{
  const employeData=[];
  const employeRef = collection(db,'employe');
  const q = query(employeRef,where('name','==',name),where('password','==',password));
  const data = await getDocs(q)
  data.forEach(doc=> employeData.push(doc.data()))

  return employeData;
 
}

export { addData, getData, getSingleData, imgDb, showData, updatePayment,db,upDateDue,deleteData,getUpdateData,signIn,updateAdminPass,addEmploe,adminSignOut,anotherLogin};
