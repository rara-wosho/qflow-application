// Import necessary Firebase SDKs
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm4V-BYhxwPOQ4BKbcUbNaz2YOFjBhpc8",
  authDomain: "qflow-3743d.firebaseapp.com",
  projectId: "qflow-3743d",
  storageBucket: "qflow-3743d.appspot.com",
  messagingSenderId: "138266013190",
  appId: "1:138266013190:web:b9910e2ef2bb2769135d87",
  measurementId: "G-JB9QRWX5B3",
};

// Ensure Firebase app is initialized once
// let app;
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApp();
// }

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth (singleton pattern)
// let auth;
// try {
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
// } catch (error) {
//   if (error.code === "auth/already-initialized") {
//     auth = getAuth(app);
//   } else {
//     throw error;
//   }
// }

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };
