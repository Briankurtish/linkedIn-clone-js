import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDKOK248GhjWYThRywNGy30UGy-uytK_xE",
  authDomain: "linkedin-clone-44c84.firebaseapp.com",
  projectId: "linkedin-clone-44c84",
  storageBucket: "linkedin-clone-44c84.appspot.com",
  messagingSenderId: "226944715006",
  appId: "1:226944715006:web:b6917a7402243e06ae7daf",
  measurementId: "G-HKWX6LER9L"
};

const firebaseApp = firebase.initialiseApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();