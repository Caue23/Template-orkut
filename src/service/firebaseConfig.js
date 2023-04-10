import {initializeApp} from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB5icSPu09rRYsvBdMXtF2SSAHMdLngpA0",
    authDomain: "login-auth-27db4.firebaseapp.com",
    projectId: "login-auth-27db4",
    storageBucket: "login-auth-27db4.appspot.com",
    messagingSenderId: "794820008155",
    appId: "1:794820008155:web:5a29617de88227885714fe"
  };

export const app = initializeApp(firebaseConfig);

