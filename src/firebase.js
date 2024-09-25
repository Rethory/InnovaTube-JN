import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBiLog0YP9KaJnPmglnhXJN2vfBcIv-oE",
  authDomain: "innovatube-jn.firebaseapp.com",
  projectId: "innovatube-jn",
  storageBucket: "innovatube-jn.appspot.com",
  messagingSenderId: "644553874348",
  appId: "1:644553874348:web:78f62dd0dca4cb87edf809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
