const midDiv = document.getElementById("middleDiv");
const mainDiv = document.getElementById("mainDiv");
const footer = document.getElementById("footer");
const logDiv = document.getElementById("logDiv");
const un = document.getElementById("un");
const pd = document.getElementById("pd");
const pageTitle = document.getElementById("pageTitle");
const dashboard = document.getElementById("Dashboard");
let u, p, l, ph;
const up = [
	{
		name:"YeaeThawe",
		pass:"asdfghjkl",
		level:"A",
		photo:"pgci.png",
		gender:"male"
	},
	{
		name:"YeaeThawe",
		pass:"asdfghjkl",
		level:"A",
		photo:"pgci.png",
		gender:"male"
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

function logined(user, pass, level, photo) {
	pageTitle.innerHTML= user+"'s Dashboard";
	u=user;
	p=pass;
	l=level;
	ph=photo;
	dashboard.innerHTML=`
	<div class="userInfo">
	<img src=${ph}>
	<label>${u}</label>
	<label>Level: ${l}</label>
	</div>
	`;
	
}
