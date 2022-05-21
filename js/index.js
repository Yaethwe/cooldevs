const body = document.querySelector('body');

const msgDiv = document.querySelector('#msgDiv');
const loginA = document.querySelector('#login-a');
const signupA = document.querySelector('#signup-a');
const logoutA = document.querySelector('#logout-a');

const msgArray = [];

class Message {
    constructor(text,style,exit){
        this.text= text;
        this.style= style;
        this.exit=exit;
        this.popup();
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

logoutA.style.display='none';
auth.onAuthStateChanged(user => {
	if(user){
        loginA.style.display='none';
        signupA.style.display='none';
        logoutA.style.display='flex';
    }else{
        logoutA.style.display='none';
    }
})

let msg1 = new Message(`Don't have an account? <a href="pages/signup.html">create one</a>`, "msg-container-rounded bg-violet SS fg-white activeC");
let msg2 = new Message(`Already have an account? <a href="pages/login.html">login</a>`, "msg-container-rounded bg-violet SS fg-white activeC");