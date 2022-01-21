const midDiv = document.getElementById("middleDiv");
const mainDiv = document.getElementById("mainDiv");
const footer = document.getElementById("footer");
const logDiv = document.getElementById("logDiv");
const un = document.getElementById("un");
const pd = document.getElementById("pd");
const pageTitle = document.getElementById("pageTitle");
const dashboard = document.getElementById("Dashboard");
const loadingDiv = document.getElementById("loadingDiv");
const logInBtnv = document.getElementById("logInButton");
const logOutBtnv = document.getElementById("logOutButton");
let u, p, l, ph, g, n;
const up = [
	{
		name:"YeaeThawe",
		pass:"300400yt",
		level:"A",
		photo:"pgci.png",
		gender:"male",
		note:"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"
	},
	{
		name:"NyanKaungSet",
		pass:"asdfghjkl",
		level:"A",
		photo:"pgci.png",
		gender:"male",
		note:"northing yet"
	}
];

let shpd = 0;

function clickSHPD() {
	if (shpd==0) {
		shpd++;
		pd.type="text"
	} else if (shpd>=1) {
		shpd=0;
		pd.type="password"
	}
}

function logined(user, pass, level, photo, gender, note) {
	pageTitle.innerHTML= user+"'s Dashboard";
	u=user;
	p=pass;
	l=level;
	ph=photo;
	g=gender;
	n=note;
	logInBtnv.className="hide";
	logOutBtnv.className="logInBtn";
	dashboard.innerHTML=`
	<div class="userInfo">
		<img src=${ph}>
		<label>${u}</label>
		<label>Level: ${l}</label>
		<hr>
		<div style="padding:10px">
			<h4>Notes</h4>
			<p>${n}</p>
            <iframe src="localstorager/index.html" width="100%" height="1000px"></iframe>
		</div>
	</div>
	`;
	
}
