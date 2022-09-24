var unLogin = document.querySelector('#un-login')
var pwdLogin = document.querySelector('#pwd-login')
var loginBtn = document.querySelector('#login-btn')

loginBtn.onclick = () => {signin(unLogin.value, pwdLogin.value)}

pwdLogin.addEventListener('keyup',e=>{
	if(e.key==="Enter"){
		signin(unLogin.value, pwdLogin.value)
	}
})
    

auth.onAuthStateChanged(user => {
	if(user){
        location.href=`dashboard.html`
    }
})

// hide the logo.
upDownSwitch.onclick();