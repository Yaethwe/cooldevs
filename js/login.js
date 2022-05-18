var unLogin = document.querySelector('#un-login')
var pwdLogin = document.querySelector('#pwd-login')
var loginBtn = document.querySelector('#login-btn')

loginBtn.onclick = () => {signin(unLogin.value, pwdLogin.value).then(e=>{
    if(!e){
        alert('login fail');
    }
})}

pwdLogin.addEventListener('keyup',e=>{
	if(e.key==="Enter"){
		signin(unLogin.value, pwdLogin.value).then(e=>{
            if(!e){
                alert('login fail');
            }
        })
	}
})
    

auth.onAuthStateChanged(user => {
	if(user){
        location.href=`dashboard.html`
    }
})