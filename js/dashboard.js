var unBox = document.querySelector('#username-box');
var emailBox = document.querySelector('#email-box');
var imgBox = document.querySelector('#img-box');
var bioBox = document.querySelector('#biography-box');
var saveBtnBio = document.querySelector('#save-btn-at-bio');
var saveBtnPe = document.querySelector('#save-btn-at-pe');
var unEditBox = document.querySelector('#un-edit');
var ppEditBox = document.querySelector('#pp-edit');
var searchBtnSc = document.querySelector('#search-btn-at-sc');
var emailBoxSc = document.querySelector('#email-search');

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
        location.href=`login.html`;
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

saveBtnPe.onclick=()=>{
    if(unEditBox.value){
        if(ppEditBox.value){
            firebase.database().ref().child('users').child(UID).update({
                name:unEditBox.value,
                profilePicture:ppEditBox.value
            }).then(()=>{
                alert("Saved Successfully.");
                location.reload();
            })
        }else{
            alert('require profile picture link');
        }
    }else{
        alert('require username');
    }
}

//popup profile editor
function showProfileEditor() {
    popup.style.display = "block";
    cover.style.display = "block";
    unEditBox.value=UD.name;
    ppEditBox.value=UD.profilePicture;
}
var popup = document.querySelector('#popup1');
var cover = document.querySelector('.cover');
popup.style.display = "none";
cover.style.display = "none";
function deletePopup(){
    popup.style.display = "none";
    cover.style.display = "none";
}

//popup search with email
function showSearchEmail() {
    popup2.style.display = "block";
    cover.style.display = "block";
    
}
var popup2 = document.querySelector('#popup2');

popup2.style.display = "none";
cover.style.display = "none";
function deletePopup2(){
    popup2.style.display = "none";
    cover.style.display = "none";
}

searchBtnSc.onclick=()=>{
    if(emailBoxSc.value){
        browseProfileWithEmail(emailBoxSc.value);
    }else{
        alert("Enter the Email Address that you want to search first.");
    }
};

function browseProfileWithEmail(email){
    location.href=`browse.html?emailsearch=${btoa(email)}`;
}