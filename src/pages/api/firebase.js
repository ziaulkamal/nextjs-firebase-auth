import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyDDpxGjixl23nxUASuOdb4ydhRdr4zgpI8",
  authDomain: "dbs-mindkreativ.firebaseapp.com",
  databaseURL: "https://dbs-mindkreativ-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dbs-mindkreativ",
  storageBucket: "dbs-mindkreativ.appspot.com",
  messagingSenderId: "734648161255",
  appId: "1:734648161255:web:0704ad1719613ec256e342",
  measurementId: "G-WQZ5FGLX5M"
};

// Inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);

// Mendapatkan referensi database
const database = getDatabase(app);

// Mendapatkan instance Firebase Authentication
const auth = getAuth();

// Fungsi untuk membuat akun pengguna dan mendapatkan token ID pengguna
async function registerUser(email, password) {
  // Buat akun pengguna baru
  await createUserWithEmailAndPassword(auth, email, password);

  // Dapatkan token ID pengguna
  const token = await auth.currentUser.getIdToken();

  return token;
}

// Mengekspor database dan fungsi registerUser
export {
  database,
  registerUser,
};
