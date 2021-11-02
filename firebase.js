import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1g9sdWK84MAdAsjf3USyyZvYnYrkhF24",
  authDomain: "facebook-clone-9d7af.firebaseapp.com",
  projectId: "facebook-clone-9d7af",
  storageBucket: "facebook-clone-9d7af.appspot.com",
  messagingSenderId: "824545055648",
  appId: "1:824545055648:web:17c2ac8e8aa2df33bfcac5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
