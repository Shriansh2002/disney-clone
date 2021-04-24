import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBWoSNL4XP6Vf9s2hTllD536vxrW3tMQWM",
    authDomain: "disneyplus-clone-3c066.firebaseapp.com",
    projectId: "disneyplus-clone-3c066",
    storageBucket: "disneyplus-clone-3c066.appspot.com",
    messagingSenderId: "465593547753",
    appId: "1:465593547753:web:5ec6638662db1e9efb2978",
    measurementId: "G-JGTCB3QX3Z"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };