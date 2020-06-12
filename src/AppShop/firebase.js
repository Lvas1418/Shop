import firebase from "firebase";
import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyAm_qp3BegV7oNMnn6NCT3m8BvtftrkjP0",
    authDomain: "shop-94362.firebaseapp.com",
    databaseURL: "https://shop-94362.firebaseio.com",
    projectId: "shop-94362",
    storageBucket: "shop-94362.appspot.com",
    messagingSenderId: "291242437825",
    appId: "1:291242437825:web:d0b759224c19d2d34c3840"
};
// Initialize Firebase

export const App = firebase.initializeApp(firebaseConfig);

