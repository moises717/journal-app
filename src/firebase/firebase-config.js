import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB3DCNWEttbNnm2A9u-P0EOVZxM_3Lz7qE",
	authDomain: "journal-app-backend.firebaseapp.com",
	projectId: "journal-app-backend",
	storageBucket: "journal-app-backend.appspot.com",
	messagingSenderId: "93829932885",
	appId: "1:93829932885:web:b5bcf82ff8d26fd93cf1dc",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
