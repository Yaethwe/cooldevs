const loginA = document.querySelector('#login-a');
const signupA = document.querySelector('#signup-a');
const logoutA = document.querySelector('#logout-a');
logoutA.style.display="none";

auth.onAuthStateChanged(user => {
    if(user){
        signupA.style.display="none";
        loginA.style.display="none";
        logoutA.style.display="flex";
    }else{
        logoutA.style.display="none";
        signupA.style.display="flex";
        loginA.style.display="flex";
    }
})