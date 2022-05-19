var unBox = document.querySelector('#username-box');
var emailBox = document.querySelector('#email-box');
var imgBox = document.querySelector('#img-box');
var bioBox = document.querySelector('#biography-box');
var saveBtnBio = document.querySelector('#save-btn-at-bio');

var UID, UD;
auth.onAuthStateChanged(user => {
	if(user){
        UID = user.uid;
        firebase.database().ref().child('users').child(user.uid).get().then(snapshot => {
            if (snapshot.exists()){
                main(snapshot.val());
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
        if(ud.profilePicture == "default"){
            imgBox.src="../img/dpp.jpg";
        }else{
            imgBox.src=ud.profilePicture;
        }
        if(ud.bio){
            bioBox.innerHTML=ud.bio
        }else{
            bioBox.innerHTML="You don't have any biography yet.";
        }
    }
}

saveBtnBio.onclick=()=>{
    firebase.database().ref().child('users').child(UID).update({
        bio:bioBox.innerHTML
    }).then(()=>{
        alert("Saved Successfully.");
    })
}