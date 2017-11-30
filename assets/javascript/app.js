$("document").ready(function() {

	//Establish variables to keep track of number of questions answered correct/wrong
	var correct = 0;
	var wrong = 0;

	//Write questions to the webpage
	$("#questions").append("<h4>1. What is the capital of Texas?");
	$("#questions").append("<input type='radio' name='capital' id='capital-lincoln' value='lincoln'>Lincoln</input>");
	$("#questions").append(" <input type='radio' name='capital' id='capital-nyc' value='nyc'>New York City</input)");
	$("#questions").append(" <input type='radio' name='capital' id='capital-denver' value='denver'>Denver</input)");
	$("#questions").append(" <input type='radio' name='capital' id='capital-austin' value='austin'>Austin</input)");

	
	$("#questions").append("<br>");

	//Add button for user to submit answers
	$("#questions").append("<button id='submit'>Submit</button>");


	//Check answers when user clicks submit
	$("#submit").on("click", function() {

		if ($("input:radio[id='capital-austin']").is(":checked")) {
		correct++;
		//alert(correct);
		//$("#results").text(correct);
       
	};

	$("#results").text("Questions answered correctly: " + correct);



	})

	




























});