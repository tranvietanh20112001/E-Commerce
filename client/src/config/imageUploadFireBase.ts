import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-R7ZIjn_dIUMH4vLNfgZNeiZ4IqkCkl4",
  authDomain: "e-commerce-6354a.firebaseapp.com",
  projectId: "e-commerce-6354a",
  storageBucket: "e-commerce-6354a.appspot.com",
  messagingSenderId: "71368575218",
  appId: "1:71368575218:web:c1dcecbee604555b34286b",
  measurementId: "G-XJRL7W89FP",
};

const app = initializeApp(firebaseConfig);

export const imageDB = getStorage(app);
