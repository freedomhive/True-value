import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { firebaseConfig, firebaseConfigured } from "./firebase-config.js";
export { firebaseConfigured };
export function getFirebase() {
  if (!firebaseConfigured) throw new Error("Firebase is not configured yet. Follow SETUP.md and update assets/js/firebase-config.js.");
  const app = initializeApp(firebaseConfig);
  return { app, auth: getAuth(app), db: getFirestore(app) };
}
