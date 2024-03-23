// initialize firebase
import { initializeApp } from "firebase/app";

// import firebasetore
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtB-ZWm5v5qyTGCPwiQ3DCW4FOq_pJut8",
  authDomain: "react-project-b9976.firebaseapp.com",
  projectId: "react-project-b9976",
  storageBucket: "react-project-b9976.appspot.com",
  messagingSenderId: "138521195583",
  appId: "1:138521195583:web:cf84d4b766b948020a748a",
  measurementId: "G-TP2CY2SF5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// call firestore database
const db = getFirestore();

// export dtabase
export { db };
