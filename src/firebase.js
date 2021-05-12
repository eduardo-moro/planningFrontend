import "firebase/auth";
import 'firebase/firestore';
import firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDhx2rsCCWp1z3K0XkgAuKtBBmXowS8jAk",
  authDomain: "uplanner-challenge.firebaseapp.com",
  projectId: "uplanner-challenge",
  storageBucket: "uplanner-challenge.appspot.com",
  messagingSenderId: "585190817759",
  appId: "1:585190817759:web:1de34732634960d0e58e6a",
  measurementId: "G-74HB1X8T9Y"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth }
