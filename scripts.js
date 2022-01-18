
let users;
//const url = 'https://yaethwe.github.io/YT/users.json';

/*
async function getData() {
	const response = await fetch(url);
	const data = await response.json();
	users=data;
}
getData();
*/
const file001 = "JSTextEditor.zip";
const app001 = `
		<div class="projectDiv">
			<h3>  JS Text Editor  </h3>
			<p>This project is a simple textEditor in HTML/CSS&JavaScript.</p>
			<p>And this text editor is open source. You can copy my project.</p>
			<p>Click the download button to download the project zip free.</p>
			<button class="downloadbtn" onclick="download('JSTextEditor')">DOWNLOAD</button>
		</div>
		`;

const app002 = `
		<div class="projectDiv">
			<center>
			<img src="https://nyankaungset.github.io/test4test/Language.ico" class="ico"><h3>  test4test Language </h3>
			</center>
			<p>This is a Burmese Grammer Website project.</p>
			<p>I don't know it is opensource or not.</p>
			<p>I can't let you to download that project but you can view it.</p>
			<p><span class="link"><a href="https://nyankaungset.github.io/test4test/" target="_blank">Click Here</a></span>to go to that website.</p>
			<p>This project was created by Ko.NyanKaungSet</p>

		</div>
		`;

const app003 = `
		<div class="projectDiv">
			<center>
			<img src="https://nyankaungset.github.io/fresh-mobile-market.com/mmdish3.jpg" class="ico"><h3>  Fresh Mobile Market </h3>
			</center>
			<p>This is a Online Shopping Website project.</p>
			<p>I don't know it is opensource or not.</p>
			<p>I can't let you to download that project but you can view it.</p>
			<p><span class="link"><a href="https://nyankaungset.github.io/fresh-mobile-market.com/" target="_blank">Click Here</a></span>to go to that website.
			<p>This project was created by Ko.NyanKaungSet</p>
		</div>
		`;
		
function closeLogIn() {
	logDiv.style="display:none";
}

function reload() {
	location.reload();
}

function download(file) {
	if (file=="JSTextEditor") {
		location.href=file001;
	}
}

function project(name) {
	if (name=='JSTextEditor') {
		document.getElementById("middleDiv").innerHTML=app001;
	}else if (name=='test4test') {
		document.getElementById("middleDiv").innerHTML=app002;
	}
}

function logIn(ue, ps) {
	for (let i = 0; i<1; i++) {
		if (up[i].name+up[i].pass==ue+ps) {
			logDiv.style="display:none;";
			logined(ue, ps, up[i].level, up[i].photo, up[i].gender);
			break;
		}
	}
}

function logInBtn() {
	logIn(un.value, pd.value);
}

function openLogIn(){ 
	logDiv.style="display:flex;";
}
closeLogIn();

