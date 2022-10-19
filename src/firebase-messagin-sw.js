importScripts('https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging.js');

import { getMessaging, getToken } from "firebase/messaging";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp({
  apiKey: "ADD HERE ",
  authDomain: "ADD HERE ",
  projectId: "ADD HERE ",
  storageBucket: "ADD HERE ",
  messagingSenderId: "ADD HERE ",
  appId: "ADD HERE ",
  measurementId: "ADD HERE ",
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
