import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ru-counter-4338a.firebaseapp.com",
  databaseURL: "https://ru-counter-4338a-default-rtdb.firebaseio.com",
  projectId: "ru-counter-4338a",
  storageBucket: "ru-counter-4338a.appspot.com",
  messagingSenderId: "24459646395",
  appId: "1:24459646395:web:71fa01228222b08d8c209e",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };