import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBIxRWvYt2gI7cuqQQgUJzFPylRdZhdHWk",
  authDomain: "react-project-f86b1.firebaseapp.com",
  databaseURL: "https://react-project-f86b1.firebaseio.com",
  projectId: "react-project-f86b1",
  storageBucket: "react-project-f86b1.appspot.com",
  messagingSenderId: "494280342591"
});

const firestore = firebase.firestore();

const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

export default firestore;
