const title = document.querySelector('title');
const fileName = document.querySelector('#fileName');
const file = document.querySelector('#file');
const body = document.querySelector('body');
const view = document.querySelector('#view');
const clearbtn = document.querySelector('#clearbtn');
const uploadbtn = document.querySelector('#uploadbtn');
const firebaseConfig = {
    apiKey: "AIzaSyA_luC-v54Rwv_D7Z9Kn3n1jjacpOpC1z8",
    authDomain: "cool-devs.firebaseapp.com",
    databaseURL: "https://cool-devs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cool-devs",
    storageBucket: "cool-devs.appspot.com",
    messagingSenderId: "526639962804",
    appId: "1:526639962804:web:5e050c551db2e0b7d195e1",
    measurementId: "G-1PQ9ZZRH4N"
};
const box = document.createElement('textarea');


file.value="";
fileName.value="";
var realFileName;
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
var Files;
var currentSelectedFile;
file.addEventListener('change', e => {
	Files = e.target.files;
	reader = new FileReader
	box.setAttribute('class','textArea');
	
	reader.onload = () => {
		box.textContent=reader.result;
	}
	
	reader.readAsDataURL(Files[0]);
	
	console.log(Files)
	
	view.appendChild(box);
	fileName.value=e.srcElement.value;
	currentSelectedFile=e.srcElement.value;
	
	title.textContent=file.files[0].name;
	realFileName=file.files[0].name;
});

document.querySelector('#btn').onclick = () => {
	file.click();
};

clearbtn.onclick= () => {
	view.removeChild(view.firstElementChild);
}
uploadbtn.onclick= () => {
	if(file.value){
		upload(realFileName);
	}else{
		alert('Select a file to upload');
	}
}

function upload(name) {
	var Name = name.replace(/\.[^/.]+$/, "")
	alert(Name);
	if (file.value){
		var uploadTask = storage.ref('Songs/UploadedFiles/'+name).put(Files[0]);
		uploadTask.on('state_changed', function(snapshot){
			console.log('uploading...');
		},
		function(error){
			alert('Error in uploading file');
		},
		function(){
			uploadTask.snapshot.ref.getDownloadURL().then(function(url){
				FileUrl = url;
				
				firebase.database().ref('Songs/UploadedFiles/'+Name).set({
					name:Name,
					link:FileUrl,
					uploader:UID
				});
				alert('File Uploaded successfully');
				}
			);
		});
	}else{
		alert('You need to select a file to upload.');
	}
}

var UID;
//main
auth.onAuthStateChanged(user => {
	if(user){
        UID = user.uid;
    }else{
        alert("Please Login To Upload The Music.");
		location.href=`login.html`;
    }
});