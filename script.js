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

//change color
	function changeColor(colors) {
		var showImg = document.getElementById("showedImg");
		var gallery1 = document.getElementById("gallery1");
		var gallery2 = document.getElementById("gallery2");
		var gallery3 = document.getElementById("gallery3");
		var gallery4 = document.getElementById("gallery4");
		var colorChoice = document.getElementById("color-choice-text");
		var price = document.getElementById("price-text");
		
		// Figure out which color is clicked on
		if (colors.id == "blue"){
			// Change main picture
			showImg.src = "image/ABRACE-stol1-blue.jpg";
			
			// change each of the small pictures
			gallery1.src = "image/ABRACE-stol2-blue.jpg";
			gallery2.src = "image/ABRACE-stol3-blue.jpg";
			gallery3.src = "image/ABRACE-stol4-blue.jpg";
			gallery4.src = "image/ABRACE-stol5-blue.jpg";
			
			// Change text of color choice and price
			colorChoice.innerText = "Blå, fuld tekstil";
			price.innerText = "8.900 DKK";
		}
		
		if (colors.id == "bluecombi"){
			showImg.src = "image/ABRACE-stol1-bluecombi.jpg";		
			
			gallery1.src = "image/ABRACE-stol2-bluecombi.jpg";
			gallery2.src = "image/ABRACE-stol3-bluecombi.jpg";
			gallery3.src = "image/ABRACE-stol4-bluecombi.jpg";
			gallery4.src = "image/ABRACE-stol5-bluecombi.jpg";
			
			colorChoice.innerText = "Blå, kombination af tekstil og kunstlæder";
			price.innerText = "10.500 DKK";
		}
		
		if (colors.id == "gray"){
			showImg.src = "image/ABRACE-stol1-gray.jpg";
			
			gallery1.src = "image/ABRACE-stol2-gray.jpg";
			gallery2.src = "image/ABRACE-stol3-gray.jpg";
			gallery3.src = "image/ABRACE-stol4-gray.jpg";
			gallery4.src = "image/ABRACE-stol5-gray.jpg";
			
			colorChoice.innerText = "Grå, fuld tekstil";
			price.innerText = "8.900 DKK";
		}
		
		if (colors.id == "graycombi"){
			showImg.src = "image/ABRACE-stol1-graycombi.jpg";
			
			gallery1.src = "image/ABRACE-stol2-graycombi.jpg";
			gallery2.src = "image/ABRACE-stol3-graycombi.jpg";
			gallery3.src = "image/ABRACE-stol4-graycombi.jpg";
			gallery4.src = "image/ABRACE-stol5-graycombi.jpg";
			
			colorChoice.innerText = "Grå, kombination af tekstil og kunstlæder";
			price.innerText = "10.500 DKK";
		}
		
		showImg.parentElement.style.display = "block";	
	}
