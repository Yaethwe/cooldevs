var unBox = document.querySelector('#username-box');
var emailBox = document.querySelector('#email-box');

var UID, UD;

auth.onAuthStateChanged(user => {
	if(user){
        UID = user.uid;
        firebase.database().ref().child('users').child(user.uid).get().then(snapshot => {
            if (snapshot.exists()){
                main(snapshot.val());
                console.log(snapshot.val());
            }else{
                alert("no data");
            }
        }).catch(error => {
            console.error(error);
        });
    }else{
        location.href(`login.html`);
    }
});

function main(ud){
    if(ud){
        UD=ud;
        unBox.innerHTML = ud.name;
        emailBox.innerHTML = ud.email;
    }
}