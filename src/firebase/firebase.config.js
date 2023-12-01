import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBm0ruLIIeZOgmxWfy5pUM04qRZxkPXcP0",
  authDomain: "kidszone-de1e6.firebaseapp.com",
  projectId: "kidszone-de1e6",
  storageBucket: "kidszone-de1e6.appspot.com",
  messagingSenderId: "724115861988",
  appId: "1:724115861988:web:4b2463a7feb0833ead57f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;