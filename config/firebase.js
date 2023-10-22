// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHeevAOG41MOLyQe1hib_sfI4A7ZQIUvE",
  authDomain: "my-react-native-app-6c4d8.firebaseapp.com",
  projectId: "my-react-native-app-6c4d8",
  storageBucket: "my-react-native-app-6c4d8.appspot.com",
  messagingSenderId: "128565196722",
  appId: "1:128565196722:web:2950305ad1a123db2d56ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {db}

