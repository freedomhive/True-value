// Firebase Web app configuration supplied by the project owner.
// Reminder: Web config values are not server secrets. Protect your data with
// Firebase Authentication, Firestore Rules, and authorized admin claims.
export const firebaseConfig = {
  apiKey: "AIzaSyCkwcR3WL-nosboohjzpVTJZPSIQlecjvg",
  authDomain: "clad-whale.firebaseapp.com",
  projectId: "clad-whale",
  storageBucket: "clad-whale.firebasestorage.app",
  messagingSenderId: "251786504853",
  appId: "1:251786504853:web:5d508e6e7a0a578ee2099c",
  measurementId: "G-KCZ159LQGK"
};
export const firebaseConfigured = !Object.values(firebaseConfig).some(v => String(v).startsWith("REPLACE_WITH"));
