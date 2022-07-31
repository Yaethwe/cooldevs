//northing yet

const bd = document.querySelector('body')

var UID;

auth.onAuthStateChanged(user => {
	if(user){
        UID = user.uid;
        firebase.database().ref().child('Songs').child("UploadedFiles").get().then(snapshot => {
            if (snapshot.exists()){
                main(snapshot.val())
            }else{
                alert("no data")
            }
        }).catch(error => {
            console.error(error)
        });
    }else{
        alert("Please Login To Play The Music.")
        //location.href=`login.html`;
    }
});

function main(files){
    renderTheFiles(files)
}
var filearray, currentfile;
filearray = []
function renderTheFiles(files){
    for (i in files){
        filearray.push(new song(files[i]))
    }
    startAction()
}

class song {
    constructor(data){
        this.data = data
    }
    log(){
        let div = document.createElement('div')
        div.style=`
            border: 2px solid blue;
            margin: 5px;
            padding: 5px;
        `;
        div.innerHTML=`
        <h3 class="SS fg-blue">${this.data.name}</h3>
        <audio controls>
            <source src="${this.data.link}" type="audio/ogg">
            <source src="${this.data.link}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <br>
        `;
        if(this.data.uploader){
            div.innerHTML=div.innerHTML+`<label class="SS fg-blue">${this.data.uploader}</label>`;
        }
        bd.appendChild(div)
    }
}

function startAction(){
    filearray.forEach(i=>{
        i.log()
    })
}
