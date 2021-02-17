import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCm-kGO0kXZ5u5csrw75x-PGeQhiU96Ts",
    authDomain: "let-s-chat-2f0b5.firebaseapp.com",
    projectId: "let-s-chat-2f0b5",
    storageBucket: "let-s-chat-2f0b5.appspot.com",
    messagingSenderId: "31206351646",
    appId: "1:31206351646:web:b0b798b52a307c4e809f0f"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export {firebaseApp};
