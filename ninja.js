console.log(document);
console.log("ok");
console.log(document.body.innerHTML);
// var st;
document.body.addEventListener("DOMSubtreeModified", function(){
	document.title="NinjaMaps"
}, false);