import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF3WEEYcru52oer9LuX5Qe2LCm91c_PWI",
  authDomain: "artify-1214.firebaseapp.com",
  projectId: "artify-1214",
  storageBucket: "artify-1214.appspot.com",
  messagingSenderId: "994853263343",
  appId: "1:994853263343:web:a396e227e29ec41746c81a",
  measurementId: "G-JP0Y9PM85V",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
