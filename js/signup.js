const unSignup = document.querySelector('#un-signup');
const eSignup = document.querySelector('#em-signup');
const pwdSignup = document.querySelector('#pwd-signup');
const signupBtn = document.querySelector('#signup-btn');
const bySignup = document.querySelector('#by-signup');

signupBtn.onclick = () => {
    if(eSignup.value){
        if(pwdSignup.value){
            if(unSignup.value){
                if(bySignup.value){
                    signup(eSignup.value, pwdSignup.value)
                
                }else{
                    alert("require birthyear.")
                }
            }else{
                alert("require nickname.")
            }
        }else{
            alert("require password.")
        }
    }else{
        alert("require email address.")
    }
}
var UID

auth.onAuthStateChanged(user => {
    firebase.database().ref().child('users').child(firebase.auth().getUid()).get().then(s=>{
        if(s.exists()){
            location.href="dashboard.html"
        }else{
            firebase.database().ref().child('users').child(user.uid).set({
                name:unSignup.value,
                birthYear:bySignup.value,
                email:eSignup.value,
                profilePicture:"default",
            }).then(a=>{
                alert("Sign Up successful!")
                location.href="dashboard.html"
            })
        }
    })
})

// hide the logo.
upDownSwitch.onclick();