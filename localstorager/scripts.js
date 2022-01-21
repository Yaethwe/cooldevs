const keyEntry = document.getElementById("keyEntry");
const txtBox = document.getElementById("txtBox");
let keyName, txt;



function openDoc() {
	key = keyEntry.value;
	txt = localStorage.getItem(key);
	txtBox.innerText=txt;
}

function saveDoc() {
	key = keyEntry.value;
	val = txtBox.value;
	localStorage.setItem(key,val);
	txtBox.innerText="Saved Successfully.";
}

function removeDoc() {
	key = keyEntry.value;
	localStorage.removeItem(key);
}

openDoc();

console.log(localStorage);
