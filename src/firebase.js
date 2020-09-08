import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPCDz0GztM8o03eI1q93fZpm80vWyy10M",
  authDomain: "instagram-clone-react-723e9.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-723e9.firebaseio.com",
  projectId: "instagram-clone-react-723e9",
  storageBucket: "instagram-clone-react-723e9.appspot.com",
  messagingSenderId: "130081113934",
  appId: "1:130081113934:web:228d9c7ae81f59d606c01f",
  measurementId: "G-L3WL66LV1B"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };