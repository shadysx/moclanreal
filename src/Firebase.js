// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth" 
import { getFirestore, collection, getDocs, addDoc, setDoc, doc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, 
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig) //Global App
const db = getFirestore() //Firestore
export const auth = getAuth() //Auth

//Get LinkList for instagram images
export async function getLinkList() {
    const link = collection(db, 'instagram-links')
    const snapShot = await getDocs(link)
    const linkList = snapShot.docs.map(doc => doc.data())
    console.log("Reading Firestore")
    
    return linkList
}

//Write doc in any collection
export async function writeDoc(colName, id, object) {
  let links = object
  try {
    await setDoc(doc(db, `${colName}`, `${id}`), {
      links 
    });
    console.log("Firestore update done in collection: ", colName)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// //AUTH --- take a look to domains (maybe we should disable localhost)
// //SignUp
// export function signUp (email, password) {
//   return createUserWithEmailAndPassword(auth, email, password)
// }
// //   // .then(userCredential => {
// //   //   const user = userCredential.user
// //   //   console.log("Account Created Succes")
// //   // })
// //   // .catch(error => {
// //   //   const errorCode = error.code
// //   //   const errorMessage = error.message
// //   // })
// //}

//SignIn
// export function signIn () {
//   const email = "laurent@mail.com"
//   const password = "adminbruh"

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log("success logged as :", user.email)
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage)
//     });
// }


// export function checkIfOnline() {
//   let online = false
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       console.log("Online")
//       online = true
//     } 
//     else {
// // User is signed out
//       // ...
//       console.log("Offline")
//     }

//       });

//   return online
// }

export function logOut(){
  signOut(auth).then(() => {
    console.log('Success logout')
  }).catch((error) => {
    //
  });
}

//Should work when online only
function getProfile(){
  const user = auth.currentUser;

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    console.log(displayName, email, photoURL, emailVerified)

    // Use User.getToken() instead.
    const uid = user.uid;
  }
}

export default db 
