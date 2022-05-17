var unSignup = document.querySelector('#un-signup')
var emailSignup = document.querySelector('#email-signup')
var pwdSignup = document.querySelector('#pwd-signup')
var signupBtn = document.querySelector('#signup-btn')
var bySignup = document.querySelector('#by-signup')

signupBtn.onclick = () => {
    if(emailSignup.value){
        if(pwdSignup.value){
            if(unSignup.value){
                if(bySignup.value){
                    signup(emailSignup.value, pwdSignup.value)
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
	if(user){
        firebase.database().ref().child('users').child(user.uid).set({
            name:unSignup.value,
            birthYear:bySignup.value,
            email:emailSignup.value,
        }).then(a=>{
            alert("Sign Up successful!")
            location.href="dashboard.html"
        })
    }
})