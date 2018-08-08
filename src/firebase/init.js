import firebase from 'firebase';
import firestore from 'firebase/firestore';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxPx_dhZU9BGlWAhyYkAt45VCpbOBkOR0",
    authDomain: "cb-ninja-chat-55a9c.firebaseapp.com",
    databaseURL: "https://cb-ninja-chat-55a9c.firebaseio.com",
    projectId: "cb-ninja-chat-55a9c",
    storageBucket: "",
    messagingSenderId: "744556945650"
};
const firebaseApp = firebase.initializeApp(config);

// next line maybe not needed but...
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();