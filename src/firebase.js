import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBAyeMz1TaywvpNoP5tDgy_48dAYFntBG0",
    authDomain: "parking-system-c1b64.firebaseapp.com",
    projectId: "parking-system-c1b64",
    storageBucket: "parking-system-c1b64.appspot.com",
    messagingSenderId: "258536245601",
    appId: "1:258536245601:web:e6e343d884927811109d20",
    measurementId: "G-6W1REWMFT6"
};
const fireabseApp = firebase.initializeApp(firebaseConfig);
const db = fireabseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;