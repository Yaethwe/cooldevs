const body = document.querySelector('body');
var ourProjectsDiv = document.querySelector('#ourProjects');
const msgDiv = document.querySelector('#msgDiv');
const msgArray = [];
const $signup_a = document.querySelector('#signup-a');
const $login_a = document.querySelector('#login-a');
const $logout_a = document.querySelector('#logout-a');

function hide(item){
    item.style.display="none";
}
function show(item, display_type){
    item.style.display=display_type;
}
var data = {
    ourProjects:[
        {
            name: "Garden-Net",
            img:"img/GardenNet.png",
            info:`
                This is the first big project of ours and successfully finished one.
            `,
            link:"https://gardennet.netlify.app/",
        },
        {
            name: "Teen-Chat",
            img:"img/teenchat.png",
            info:`
                This is the first messaging app of ours and successfully finished one.
            `,
            link:`https://teenchat.netlify.app/?chat=${btoa(JSON.stringify(
                {
                    chat:"anonymous",
                    data:{
                        username:"anonymous", 
                        id:"anonymous",
                        config:{
                            bg:"blue",
                            fg:"white"
                        },
                        img:"https://cooldevs.netlify.app/img/fav.png/"
                    }
                }
            ))}`,
        },
        {
            name: "Cool-Devs",
            img:"img/fav.png",
            info:`
                This is the main website of ours.
            `,
            link:"https://cooldevs.netlify.app/",
        },
        {
            name: "Dingar",
            img:"https://dingar.netlify.app/img/Gold-coin.svg",
            info:`
                This is the first payment app project of ours and successfully finished one.
            `,
            link:"https://dingar.netlify.app/",
        },
    ],
    user:{},
};
class Message {
    constructor(text,style,exit){
        this.text= text;
        this.style= style;
        this.exit=exit;
    }
    popup(){
        this.msgBox = document.createElement('div');
        this.msgBox.className = this.style;
        this.msg = document.createElement('p');

        this.msg.innerHTML = this.text;

        this.msgBox.appendChild(this.msg);

        if(this.exit){
            this.xBtn = document.createElement('a');
            this.xBtn.className = "xBtn rounded pad-mar";
            this.xBtn.setAttribute("title","Click to close.");
            this.xBtn.innerHTML = "x";
            this.msgBox.appendChild(this.xBtn);
            this.xBtn.onclick=()=>{this.delete()}
        }

        msgDiv.appendChild(this.msgBox);
        msgArray.push(this.msgBox);
    }
    delete(){
        msgArray.splice(msgArray.indexOf(this.msgBox),1);
        msgDiv.removeChild(this.msgBox);
    }
}
var msg1 = new Message(`Don't have an account? <a href="pages/signup.html">create one</a>`, "msg-container-rounded bg-violet SS fg-white activeC");
var msg2 = new Message(`Already have an account? <a href="pages/login.html">login</a>`, "msg-container-rounded bg-violet SS fg-white activeC");

auth.onAuthStateChanged(user => {
	if(user){
        data.user=user;
        show($logout_a, "block");
        hide($login_a);
        hide($signup_a);
    }else{
        msg1.popup()
        msg2.popup()
        show($signup_a, "block");
        show($login_a, "block");
        hide($logout_a);
    }
})
main();
function main(){
    renderProjects();
}


/*
function main() {
    firebase.database().ref().child('ourProjects').get().then(ss=>{
        if (ss.exists()){
            data.ourProjects = ss.val()
            renderProjects();
        }
    })
}*/

function renderProjects() {
    for (let i = 0; i <= data.ourProjects.length; i++){
        let d = data.ourProjects;
        let div = document.createElement('div');
        div.innerHTML=`
        <div class="card" style="width: 18rem; margin:5px;">
        <img src="${d[i].img}" class="card-img-top" alt="${d[i].name}">
        <div class="card-body">
            <h5 class="card-title">${d[i].name}</h5>
            <p class="card-text">${d[i].info}</p>
            <button onclick="window.open('${d[i].link}','${d[i].name}',height='400px',width='200px');" target="_blank" class="btn btn-primary">Open App</button>
        </div>
        </div>
        `;
        ourProjectsDiv.appendChild(div);
    }
}