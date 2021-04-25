import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCWhN0HCLy5WCKat_5oZ-ySpt30U5nD7ZE",
    authDomain: "sales-webpage.firebaseapp.com",
    projectId: "sales-webpage",
    storageBucket: "sales-webpage.appspot.com",
    messagingSenderId: "663707599296",
    appId: "1:663707599296:web:9a8338792e3c5549088825",
    measurementId: "G-WQZE22SE1Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };




