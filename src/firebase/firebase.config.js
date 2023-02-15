import { initializeApp } from 'firebase/app';
import { getAuth, } from 'firebase/auth'


export const firebaseConfig = {
    apiKey: "AIzaSyAKzNPIgaU29itavvUpY7oBUKtv1KPA60w",
    authDomain: "auth-first-project-742da.firebaseapp.com",
    projectId: "auth-first-project-742da",
    storageBucket: "auth-first-project-742da.appspot.com",
    messagingSenderId: "169682390353",
    appId: "1:169682390353:web:d5726a85a122734a5dd770"
};

export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );
