console.log("I am the db.js file");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBcVyNvQnTQBcX-qmsLEil81a4dzQ4BDs",
  authDomain: "dis-pwa-final.firebaseapp.com",
  projectId: "dis-pwa-final",
  storageBucket: "dis-pwa-final.appspot.com",
  messagingSenderId: "1071268117590",
  appId: "1:1071268117590:web:a1acb13a70290ca767cff7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCatches(db) {
  const catchesCol = collection(db, "catches");
  const catchesSnapshot = await getDocs(catchesCol);
  const catchesList = catchesSnapshot.docs.map((doc) => doc.data());
  return catchesList;
}
