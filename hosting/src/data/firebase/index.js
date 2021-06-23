import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import config from "./config.json";

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const Timestamp = firebase.firestore.Timestamp;
