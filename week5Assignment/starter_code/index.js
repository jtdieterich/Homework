

//we need an input element, id, value

//we need a button

//on button click, run a function to change the background based on the input
	$("#submit-btn").click(changeBackground);

//define that function that runs when button is clicked
function changeBackground(){

	//stop previous event
		event.preventDefault();

	//declaring variable of city bar 
		var cityInput = $("#city-type").val();
		console.log(cityInput);

	//NYC
	if (cityInput == "NYC" || cityInput == "New York" || cityInput == "New York City"){
		$('body').css("background", "url(images/nyc.jpg)");
		//background: url(../images/citipix_skyline.jpg)

	//San Francisco 
	} else if (cityInput == "San Francisco" || cityInput == "Bay Area" || cityInput == "SF"){
		$('body').css("background", "url(images/sf.jpg)");

	//LA
	} else if (cityInput == "LA" || cityInput == "LAX" || cityInput == "Los Angeles"){
		$('body').css("background", "url(images/la.jpg)");

	//Austin
	} else if (cityInput == "Austin" || cityInput == "ATX"){
		$('body').css("background", "url(images/austin.jpg)");

	//Sydney
	} else if (cityInput == "Sydney" || cityInput == "SYD"){
		$('body').css("background", "url(images/sydney.jpg)");

	}

	
}	