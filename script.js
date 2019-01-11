// JavaScript Document

window.onload = function(){

	//open navigation on mobile
	document.getElementById("menu-button").addEventListener("click", function(event){
	    event.preventDefault(); 
	    document.getElementById("body-id").classList.add("navigation-active");
	});

	//close navigation on mobile
	document.getElementById("menu-button-close").addEventListener("click", function(event){
	    event.preventDefault(); 
	    document.getElementById("body-id").classList.remove("navigation-active");
	});

}