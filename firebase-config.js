import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhXJ4-5574ohhvWSI1gNvnkriAJIzJKRc",
    authDomain: "alumnos-6dcf2.firebaseapp.com",
    projectId: "alumnos-6dcf2",
    storageBucket: "alumnos-6dcf2.firebasestorage.app",
    messagingSenderId: "57638183084",
    appId: "1:57638183084:web:565fc90f7d57e10b1b3f09",
    measurementId: "G-9ZFSH4B43E"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
