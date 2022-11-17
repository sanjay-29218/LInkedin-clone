// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCfhK5f4h2fYbqivOO0dvYc1zWDiwTQjW8",
    authDomain: "linkedin-clone-6c8d0.firebaseapp.com",
    projectId: "linkedin-clone-6c8d0",
    storageBucket: "linkedin-clone-6c8d0.appspot.com",
    messagingSenderId: "241626339300",
    appId: "1:241626339300:web:869a070b795b0d395159f1",
    measurementId: "G-MBNKZK5P69"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { db, auth };