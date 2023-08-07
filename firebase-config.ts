import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ru-counter-4338a.firebaseapp.com",
  databaseURL: "https://ru-counter-4338a-default-rtdb.firebaseio.com",
  projectId: "ru-counter-4338a",
  storageBucket: "ru-counter-4338a.appspot.com",
  messagingSenderId: "24459646395",
  appId: "1:24459646395:web:71fa01228222b08d8c209e",
};
let app;
if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getDatabase(app);
const auth = getAuth(app)

export { db, app, auth };
