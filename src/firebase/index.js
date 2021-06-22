import firebase from 'firebase';
import  '@firebase/firestore';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDBWrRC5jssS6mLewrjnwOf18cJYRnf0Jk",
    authDomain: "full-time-force.firebaseapp.com",
    projectId: "full-time-force",
    storageBucket: "full-time-force.appspot.com",
    messagingSenderId: "498985163219",
    appId: "1:498985163219:web:d840785ed76edd73107726",
    measurementId: "G-GYZK48QSQK"
  });

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}

export const db = getFirestore();
