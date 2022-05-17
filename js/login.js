var unLogin = document.querySelector('#un-login');
var pwdLogin = document.querySelector('#pwd-login');
var loginBtn = document.querySelector('#login-btn');

loginBtn.onclick = () => {signin(unLogin.value, pwdLogin.value)}

auth.onAuthStateChanged(user => {
	if(user){
        location.href=`dashboard.html`;
    }
});