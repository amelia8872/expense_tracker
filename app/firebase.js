// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsY0HNNsCYVHoM14K0Jnh7eGI97FPc91Q',
  authDomain: 'expense-tracker-526f3.firebaseapp.com',
  projectId: 'expense-tracker-526f3',
  storageBucket: 'expense-tracker-526f3.appspot.com',
  messagingSenderId: '532388480845',
  appId: '1:532388480845:web:116a588f02d0a1e161d904',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
