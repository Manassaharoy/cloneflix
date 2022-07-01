import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZu0PiU8Kv5FJ8IEE-DGUiQqV1J0E1mFg",
  authDomain: "chillflix-6f884.firebaseapp.com",
  projectId: "chillflix-6f884",
  storageBucket: "chillflix-6f884.appspot.com",
  messagingSenderId: "760860688015",
  appId: "1:760860688015:web:8817ce60a4e24db446bafa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export default app;