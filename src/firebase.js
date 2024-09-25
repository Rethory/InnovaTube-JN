// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBiLog0YP9KaJnPmglnhXJN2vfBcIv-oE",
  authDomain: "innovatube-jn.firebaseapp.com",
  projectId: "innovatube-jn",
  storageBucket: "innovatube-jn.appspot.com",
  messagingSenderId: "644553874348",
  appId: "1:644553874348:web:78f62dd0dca4cb87edf809"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

export default firebase.auth()
