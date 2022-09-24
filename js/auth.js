// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_luC-v54Rwv_D7Z9Kn3n1jjacpOpC1z8",
    authDomain: "cool-devs.firebaseapp.com",
    databaseURL: "https://cool-devs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cool-devs",
    storageBucket: "cool-devs.appspot.com",
    messagingSenderId: "526639962804",
    appId: "1:526639962804:web:5e050c551db2e0b7d195e1",
    measurementId: "G-1PQ9ZZRH4N"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred =>{
        return cred.user;
    }).catch(err=>{
        popErr(err.code);
        //alert(`Error Code: ${err.code} \n Message : ${err.message}`);
    });
}

function signin(email, password){
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        return cred.user;
    }).catch(err=>{
        popErr(err.code);
        //alert(`Error Code: ${err.code} \n Message : ${err.message}`);
    });
}

function popErr(err){
    switch(err){
        case "auth/network-request-failed":
            alert('No internet connection. Please connect to a network first.');
            break;
        case "auth/invalid-email":
            alert('Please enter an existing email.');
            break;
    }
}

function signout(){
    auth.signOut();
    location.href="../index.html";
}

