// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  enableIndexedDbPersistence,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBcVyNvQnTQBcX-qmsLEil81a4dzQ4BDs",
  authDomain: "dis-pwa-final.firebaseapp.com",
  projectId: "dis-pwa-final",
  storageBucket: "dis-pwa-final.appspot.com",
  messagingSenderId: "1071268117590",
  appId: "1:1071268117590:web:a1acb13a70290ca767cff7",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "catches");

// getDocs(colRef)
//   .then((snapshot) => {
//     // console.log(snapshot.docs)
//     let catches = [];
//     snapshot.docs.forEach((doc) => {
//       catches.push({ ...doc.data(), id: doc.id });
//       renderCatches(doc.data(), doc.id);
//     });
//     console.log(catches);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

onSnapshot(colRef, (snapshot) => {
  let catches = [];
  snapshot.docs.forEach((doc) => {
    catches.push({ ...doc.data(), id: doc.id });
    renderCatches(doc.data(), doc.id);
  });
  console.log(catches);
});

enableIndexedDbPersistence().catch((err) => {
  if (err.code == "failed-precondition") {
    console.log("multiple tabs");
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == "unimplemented") {
    console.log("not supported");
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});
