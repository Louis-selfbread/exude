import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA-wfdXFZEPBFeIwskgYryeMIxqe14vefU",
  authDomain: "louisauth-6aeff.firebaseapp.com",
  databaseURL: "https://louisauth-6aeff.firebaseio.com",
  projectId: "louisauth-6aeff",
  storageBucket: "louisauth-6aeff.appspot.com",
  messagingSenderId: "753475889568",
  appId: "1:753475889568:web:bd3ad06a4bfde8ed2f9cc5",
  measurementId: "G-96GZ79RBRY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
