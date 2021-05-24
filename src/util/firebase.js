import firebase from 'firebase';


/* database */

var firebaseConfig = {
  apiKey: "AIzaSyBDyP-V1adnM5NPnoXimvskEvbaA60_bWU",
  authDomain: "tododaily-d7986.firebaseapp.com",
  databaseURL : 'https://tododaily-d7986-default-rtdb.firebaseio.com',
  projectId: "tododaily-d7986",
  storageBucket: "tododaily-d7986.appspot.com",
  messagingSenderId: "1095708192032",
  appId: "1:1095708192032:web:b46d2f8792499bd59bfb45",
  measurementId: "G-288V19EQGH"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);


export default firebase; 