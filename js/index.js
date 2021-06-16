function mainFontSize(){
	let content = document.getElementById("content"); 
	let fontSize = window.getComputedStyle(content, null).getPropertyValue('font-size');
	document.getElementById("content").style.fontSize = (parseFloat(fontSize) - 5 )+ "px";
	
}