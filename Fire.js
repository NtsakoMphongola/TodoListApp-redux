import firebase from 'firebase';
import '@firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1aCENG8UtlxbdmnVubhwY5Hdw1cmY4B0",
    authDomain: "todoapp-redux-9ab7c.firebaseapp.com",
    projectId: "todoapp-redux-9ab7c",
    storageBucket: "todoapp-redux-9ab7c.appspot.com",
    messagingSenderId: "823479058454",
    appId: "1:823479058454:web:6c0d6a361f2a112d1f7537"
  };

class Fire{
    init(){
        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        firebase.auth().onAuthstateChanged(user =>{
            if (user){

            } else {
                firebase
                .auth()
                .signInAnonymously()
                .catch(error =>{});
            }
        })
    }
}

export default Fire; 