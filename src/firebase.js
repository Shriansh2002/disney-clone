import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGVIz-zRh4lXi74h1cg8fvxVxR2PjafB4",
    authDomain: "disneyplus-clone-ea7c0.firebaseapp.com",
    projectId: "disneyplus-clone-ea7c0",
    storageBucket: "disneyplus-clone-ea7c0.appspot.com",
    messagingSenderId: "641527069553",
    appId: "1:641527069553:web:848756fcf25b683c5654d0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;