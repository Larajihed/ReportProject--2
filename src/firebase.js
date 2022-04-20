import firebase  from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from "firebase/database";
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'



const app = firebase.initializeApp({
  apiKey: "AIzaSyCGuaQGytx01VihqjMc0ramZ3qT_lfdytU",
  authDomain: "reports-generator-1b38f.firebaseapp.com",
  databaseURL: "https://reports-generator-1b38f-default-rtdb.firebaseio.com",
  projectId: "reports-generator-1b38f",
  storageBucket: "reports-generator-1b38f.appspot.com",
  messagingSenderId: "75876919018",
  appId: "1:75876919018:web:983f8d19db48a811855993"
})

export const auth = app.auth()
// Get a reference to the database service
export const database = getDatabase();
export const storage = getStorage();
export const db = getFirestore()

export default app

