import firebase from 'firebase';
import firestore from 'firebase/firestore';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDXIuCkJUMY9kod-VKq4BU76EJbr-ytdUY",
    authDomain: "cb-ninja-chat.firebaseapp.com",
    databaseURL: "https://cb-ninja-chat.firebaseio.com",
    projectId: "cb-ninja-chat",
    storageBucket: "cb-ninja-chat.appspot.com",
    messagingSenderId: "331399359191"
};
const firebaseApp = firebase.initializeApp(config);

// next line maybe not needed but...
firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();