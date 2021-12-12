import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCVJIMUFR6t6ahE5fCGF8kSR-67-nBdljk",
    authDomain: "merchy-pre-register.firebaseapp.com",
    databaseURL: "https://merchy-pre-register-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "merchy-pre-register",
    storageBucket: "merchy-pre-register.appspot.com",
    messagingSenderId: "272716291070",
    appId: "1:272716291070:web:8ae189e26e73cce22fbeaf",
    measurementId: "G-RKM98WJ7XF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;