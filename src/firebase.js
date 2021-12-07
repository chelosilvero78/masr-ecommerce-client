// import * as firebase from "firebase";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDniyhK46KyCVzN4PkypDIKjMEZLfTUx64",
//   authDomain: "ecommerce-225c8.firebaseapp.com",
//   databaseURL: "https://ecommerce-225c8.firebaseio.com",
//   projectId: "ecommerce-225c8",
//   storageBucket: "ecommerce-225c8.appspot.com",
//   messagingSenderId: "593746841585",
//   appId: "1:593746841585:web:f0090fc9296a27f7c67e50",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // export
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//------------------------------
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
//url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};
console.log(firebaseConfig)
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();