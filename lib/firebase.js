//Conecting to the Firebase App (npm install firebase)

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//Import firebase from 'firebase/app';
import 'firebase/auth';

//Environment variables (.env.local)
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase;