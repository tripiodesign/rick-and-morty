import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCntTJsSB6rpiV3dah1zJEwLKBHjpUtKIQ",
  authDomain: "ram-app-1cd9a.firebaseapp.com",
  databaseURL: "https://ram-app-1cd9a-default-rtdb.firebaseio.com",
  projectId: "ram-app-1cd9a",
  storageBucket: "ram-app-1cd9a.appspot.com",
  messagingSenderId: "759786406013",
  appId: "1:759786406013:web:09ca1ed699102741727114"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
