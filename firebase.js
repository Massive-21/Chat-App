// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDSTNzikTaIav1MLjYHUiVQ_LHmSgrJoLc",
authDomain: "chat-app-yt-90fa5.firebaseapp.com",
projectId: "chat-app-yt-90fa5",
storageBucket: "chat-app-yt-90fa5.appspot.com",
messagingSenderId: "530451832623",
appId: "1:530451832623:web:42c5ea4859f896e2fbcbda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)