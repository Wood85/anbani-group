import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // если хочешь Realtime DB
// import { getFirestore } from "firebase/firestore"; // если хочешь Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDZ9LS_vPP2qUKgQgZ90-HEJQhdYqnOMGs",
  authDomain: "anbani-group.firebaseapp.com",
  databaseURL:
    "https://anbani-group-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anbani-group",
  storageBucket: "anbani-group.firebasestorage.app",
  messagingSenderId: "535896065288",
  appId: "1:535896065288:web:1569c5d218cbee007318bd",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
// export const db = getFirestore(app); // если захочешь firestore
