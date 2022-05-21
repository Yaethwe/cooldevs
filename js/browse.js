const renderDiv = document.querySelector('#middleDiv');
let url, parameters, data, email, users, SUD;
function load(email) {
    firebase.database().ref().child('users').get().then(s=>{
        if(s.exists()){
            users = s.val();
            render('email');
        }else{
            alert('error');
        }
    })
}

auth.onAuthStateChanged(user => {
	if(user){
        url = location.href, paramaters = new URL(url).searchParams;
        if(paramaters.get("emailsearch")){
            data = paramaters.get("emailsearch");
            email = atob(data);
            load(email);
        }
    }else{
        location.href=`login.html`;
    }
});

function render(type){
    switch(type){
        case "email":
            for (let me in users){
                if(users[me].email==email){
                    SUD=users[me];
                    break;
                }
            }
            if(SUD){
                if(SUD.profilePicture=="default"){
                    SUD.profilePicture="../img/dpp.jpg"
                }
                renderDiv.innerHTML=`
                <div class="text-container-rounded bg-wheat SS fg-purple activeC pad-10 flex-center flex-column">
                    <h2 class="fg-orange">${SUD.name}</span></h2>
                    <img class="rounded-img" src="${SUD.profilePicture}" alt="Image">
                    <div class="flex"><h4 class="SS fg-gray"></h4>${SUD.email}</div>
                    <div id="biography-box-container">
                        <h3 SS fg-gray>Biography</h3>
                        <hr>
                        <div id="biography-box" class="rich-editor bg-white" style="margin-left: -5px;">${SUD.bio}</div>
                    </div>
                </div>
                `;
            }else{
                alert('User not found.');
            }
            break;
    }
}
