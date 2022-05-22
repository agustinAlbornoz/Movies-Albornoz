// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhpPOf2zl2CuRgF2dZfZ20Hm2Y5avABlo",
    authDomain: "wazowski-movies.firebaseapp.com",
    projectId: "wazowski-movies",
    storageBucket: "wazowski-movies.appspot.com",
    messagingSenderId: "633511946",
    appId: "1:633511946:web:b6322c6e75ef59f5a8bff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)