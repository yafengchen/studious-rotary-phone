import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAZAyea_Eba6AmIvR2JugoJIOjMhKMF104",
  authDomain: "fir-auth-8c7b6.firebaseapp.com",
  databaseURL: "https://fir-auth-8c7b6.firebaseio.com",
  projectId: "fir-auth-8c7b6",
  storageBucket: "fir-auth-8c7b6.appspot.com",
  messagingSenderId: "285357093568",
  appId: "1:285357093568:web:f50db410356aa1d72a7325",
  measurementId: "G-Y4G3FS110B",
});

export const db = app.firestore();

export default app;
