import { getFirebase, firebaseConfigured } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
const form=document.querySelector("#login-form"),message=document.querySelector("#login-message");
form.addEventListener("submit",async e=>{e.preventDefault();message.textContent="";if(!firebaseConfigured){message.textContent="Firebase is not configured. Follow SETUP.md first.";return;}const fd=new FormData(form);try{const {auth}=getFirebase();await signInWithEmailAndPassword(auth,String(fd.get("email")).trim(),String(fd.get("password")));location.href="./index.html";}catch(err){console.error(err);message.textContent="Sign-in failed. Check your credentials and Firebase Authentication setup.";}})
