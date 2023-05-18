window.addEventListener("DOMContentLoaded", (event) => {
	//Event listener for the 'New Notes' button. Will call the reloader() function when the button is clicked.
	var reloadBtn = document.getElementById("newNotesButton");
	reloadBtn.addEventListener("click", reloader);
	
	//Event listeners for the different drop down menus. Will call the changeListener() function when changed to certain values.

	//Level 2 event listener
	var level2Checker = document.getElementById("level2");
	level2Checker.addEventListener("change", changeListener);

	//Product event listener
	var productChecker = document.getElementById("product");
	productChecker.addEventListener("change", changeListener);

	//Priority event listener
	var priorityChecker = document.getElementById("priority");
	priorityChecker.addEventListener("change", changeListener);
});	

function reloader(){
	//Resets the entire page back to default for new note entry after confirmation
	var level2Value = document.getElementById("level2").value;
	var productValue = document.getElementById("product").value;
	var priorityValue = document.getElementById("priority").value;
	
	//Only reminds the user to mark the case accordingly when certain fields are selected
	if (priorityValue == "pe" || priorityValue == "high" || productValue == "wx" || level2Value == "yes"){
		//audio.play()
		if (confirm("Don't forget to mark the case as either Level 2, WX, High Priority, or PE!")){
			if(confirm("Are you sure? This action cannot be undone.")){
				location.reload();
			}	
		}
	} else{
		if (confirm("Are you sure? This action cannot be undone.")){
			location.reload();
		}
	}
}

function reminder(){	
	//Sets the colors of all the main elements on the site to red and changes header to remind the user to mark the case correctly
	var pageColors = document.querySelectorAll('.footerdiv,.headerdiv,.mainbuttons');
	for (var i = 0; i < pageColors.length; i++){
		pageColors[i].style.backgroundColor = "red";
	}
}

function reset(){
	//Sets the colors of all the main elements on the site back to default, and sets the header text back to default
	var pageColors = document.querySelectorAll('.footerdiv,.headerdiv,.mainbuttons');
	for (var i = 0; i < pageColors.length; i++){
		pageColors[i].style.backgroundColor = "";
	}
}

function changeListener(){
	//Sets the variables for the different drop down menu values
	var level2Value = document.getElementById("level2").value;
	var productValue = document.getElementById("product").value;
	var priorityValue = document.getElementById("priority").value;
	
	//Calls the reminder() function only if any of the required values are set. Otherwise the reset() function is called, resetting the page colors to default
	if (priorityValue == "pe" || priorityValue == "high" || productValue == "wx" || level2Value == "yes"){
		reminder();
	} else{
		reset();
	}
}