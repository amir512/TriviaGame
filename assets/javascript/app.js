$("document").ready(function() {

	//Establish variables to keep track of number of questions answered correct/wrong
	var correct = 0;
	var wrong = 0;

	//Create a variable for breaks
	var linebreak = $("#questions").append("<br>");

	//Write questions to the webpage
	$("#questions").append("<h4>1. What is the capital of Texas?");
	$("#questions").append("<input type='radio' name='capital' id='capital-lincoln' value='lincoln'>Lincoln</input>");
	$("#questions").append(" <input type='radio' name='capital' id='capital-nyc' value='nyc'>New York City</input)");
	$("#questions").append(" <input type='radio' name='capital' id='capital-denver' value='denver'>Denver</input)");
	$("#questions").append(" <input type='radio' name='capital' id='capital-austin' value='austin'>Austin</input)");

	linebreak;

	$("#questions").append("<h4>2. How many countries comprise the United Kingdom?");
	$("#questions").append("<input type='radio' name='uk' id='uk-1' value='1'>One</input>");
	$("#questions").append(" <input type='radio' name='uk' id='uk-2' value='2'>Two</input)");
	$("#questions").append(" <input type='radio' name='uk' id='uk-3' value='3'>Three</input)");
	$("#questions").append(" <input type='radio' name='uk' id='uk-4' value='4'>Four</input)");

	linebreak;	

	$("#questions").append("<h4>3. What is the name of the current American president?");
	$("#questions").append("<input type='radio' name='president' id='washington' value='Washington'>Washington</input>");
	$("#questions").append(" <input type='radio' name='president' id='lincoln' value='Lincoln'>Lincoln</input)");
	$("#questions").append(" <input type='radio' name='president' id='trump' value='Trump'>Trump</input)");
	$("#questions").append(" <input type='radio' name='president' id='obama' value='Obama'>Obama</input)");

	linebreak;		

	$("#questions").append("<h4>4. What is the only man made object observable from the Moon?");
	$("#questions").append("<input type='radio' name='moon' id='greatwall' value='wall'>Great Wall of China</input>");
	$("#questions").append(" <input type='radio' name='moon' id='eiffel' value='eiffel'>Eiffel Tower</input)");
	$("#questions").append(" <input type='radio' name='moon' id='empite' value='empite'>Empire State Building</input)");
	$("#questions").append(" <input type='radio' name='moon' id='bridge' value='bridge'>Golden Gate Bridge</input)");

	linebreak;



	//Add button for user to submit answers
	$("#questions").append("<button id='submit'>Submit</button>");


	//Check answers when user clicks submit
	$("#submit").on("click", function() {

		if ($("input:radio[id='capital-austin']").is(":checked")) {
			correct++;
			//alert(correct);
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='uk-4']").is(":checked")) {
			correct++;
		//alert(correct);
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='trump']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='greatwall']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

	$("#results").text("Questions answered correctly: " + correct);
	$("#results").append("<br>");
	$("#results").append("Questions answered incorrectly: " + wrong);

	});





	});