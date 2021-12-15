let x;
function SignUp() {
    document.getElementById("SignUpBox").className="signupBox";
}

function course() {
    document.getElementById("course").className="videoDiv";	
}

function closecourse() {
	document.getElementById("course").className="hide";
}
    
function LogIn() {
    document.getElementById("logInBox").className="loginBox";
}

function pgc() {
	document.getElementById("PGCL").className="videoDiv";
	document.getElementById("image1").className="videotitle";
}

function introhtml() {
	document.getElementById("introhtml").className="videoDiv";
}

function introjs() {
	document.getElementById("introjs").className="videoDiv";
}

function notfound() {
	document.getElementById("notfound").className="videoDiv";
}

function box01() {
	document.getElementById("box01").className="defbox";
}



function search() {
    x = document.getElementById("searchbox").value;
	if (x=="PGC") {
		pgc();
	}else if (x=="PGC logo") {
		pgc();
	}else if (x=="html intro") {
		introhtml();
	}else if (x=="html") {
		introhtml();
	}else if (x=="introduction of html") {
		introhtml();
	}else if (x=="course") {
		course();
	}else if (x=="javascript") {
		introjs();
	}
	 else {
		notfound();
	}
}
    
function hide() {
    document.getElementById("logInBox").className="hide";
}
    
function hide1() {
    document.getElementById("SignUpBox").className="hide";
}

function createAccount() {
	username = document.getElementById("signupUsername").value;
	password = document.getElementById("signupPassword").value;
	email = document.getElementById("signupEmail").value;
	phone = document.getElementById("signupPhonenumber").value;
}



function closepgcl() {
	document.getElementById("PGCL").className="hide";
}

function closehtmlintro() {
	document.getElementById("introhtml").className="hide";
}

function closejsintro() {
	document.getElementById("introjs").className="hide";
}

function closenotfound() {
	document.getElementById("notfound").className="hide";
}

function closecourse() {
	document.getElementById("course").className="hide";
}

function closebox01() {
	document.getElementById("box01").className="hide";
}
