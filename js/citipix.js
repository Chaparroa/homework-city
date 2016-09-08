//  Create form field for user input
// Create button for input submission
// Have default background image 
// Have list of city names user can type that will pull up a specific background.
// When user types in X, have JS compare that to the list of names stored
// if input is X city then show X image as background
// Do same for A,B,C cities and their corresponding images

$(document).ready(function(){
	var city = $("#city-type").val(); //call ```$.val()``` on inputs to get the string value of your user's input
	event.preventDefault();	//prevent form submission
	$("#entry").submit(function(){
			alert("Text has been submitted");
	});

	if (city == "New York" || "New York City" || "NYC"){
		console.log("show nyc image");
	}

	if (city == "San Francisco" || "SF" || "Bay Area") {
		console.log("show SF image");
	}
	if (city == "Los Angeles" || "LA" || "LAX"){
		console.log("show LA image");
	}
	if (city == "Austin" || "ATX"){
		console.log("show atx image");
	}
	if (city == "Sydney" || "SYD") {
		console.log("show syd image");
	}
	else {
		console.log("try another city");
	}



// - Call ```$.val()``` on inputs to get the string value of your user's input
// - Store user input in ```var city```
// - Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Prevent a form submission using the ```event.preventDefault()``` function
// - Get the first element from an attribute name using ```$.attr()```
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
// - If a user submits:

//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//   - "Austin" or "ATX" make the background of the page austin.jpg
//   - "Sydney" or "SYD" make the background of the page sydney.jpg




});

