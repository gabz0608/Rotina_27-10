// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAD7NiBmesqRp2JVKjbim31dOvr0nTHnuU",
  authDomain: "rotina20-10.firebaseapp.com",
  databaseURL: "https://rotina20-10-default-rtdb.firebaseio.com",
  projectId: "rotina20-10",
  storageBucket: "rotina20-10.firebasestorage.app",
  messagingSenderId: "749996584525",
  appId: "1:749996584525:web:a7e9a0c1323ece6f92f604",
  measurementId: "G-VDTE1SXY7P"
};

const app = initializeApp(firebaseConfig); 

// É ESTA LINHA QUE PERMITE O CRUD IMPORTAR O BANCO!
export const db = getDatabase(app);