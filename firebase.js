import { firebase } from '@react-native-firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1aCENG8UtlxbdmnVubhwY5Hdw1cmY4B0",
    authDomain: "todoapp-redux-9ab7c.firebaseapp.com",
    projectId: "todoapp-redux-9ab7c",
    storageBucket: "todoapp-redux-9ab7c.appspot.com",
    messagingSenderId: "823479058454",
    appId: "1:823479058454:web:6c0d6a361f2a112d1f7537"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export {firebase};
