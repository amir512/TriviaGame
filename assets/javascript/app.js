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

	$("#questions").append("<h4>5. What is the largest fish in the ocean?");
	$("#questions").append("<input type='radio' name='ocean' id='whaleshark' value='whaleshark'>Whale Shark</input>");
	$("#questions").append(" <input type='radio' name='ocean' id='salmon' value='eiffel'>Salmon</input)");
	$("#questions").append(" <input type='radio' name='ocean' id='blue' value='bluewhale'>Blue Whale</input)");
	$("#questions").append(" <input type='radio' name='ocean' id='shark' value='greatwhite'>Great White Shark</input)");

	linebreak;

	$("#questions").append("<h4>6. What common word changes its prononciation when the first letter is capitalized?");
	$("#questions").append("<input type='radio' name='word' id='read' value='Read'>read</input>");
	$("#questions").append(" <input type='radio' name='word' id='polish' value='Polish'>polish</input)");
	$("#questions").append(" <input type='radio' name='word' id='magma' value='Magma'>magma</input)");
	$("#questions").append(" <input type='radio' name='word' id='america' value='America'>america</input)");

	linebreak;

	$("#questions").append("<h4>7. What is the most popular drink in the world that does not contain alcohol?");
	$("#questions").append("<input type='radio' name='drink' id='water' value='water'>Water</input>");
	$("#questions").append(" <input type='radio' name='drink' id='coffee' value='coffee'>Coffee</input)");
	$("#questions").append(" <input type='radio' name='drink' id='coca-cola' value='coca-cola'>Coca-Cola</input)");
	$("#questions").append(" <input type='radio' name='drink' id='juice' value='juice'>Orange Juice</input)");

	linebreak;

	$("#questions").append("<h4>8. Which country is bordered by both the Atlantic and Indian Oceans?");
	$("#questions").append("<input type='radio' name='country' id='southafrica' value='southAfrica'>South Africa</input>");
	$("#questions").append(" <input type='radio' name='country' id='india' value='India'>India</input)");
	$("#questions").append(" <input type='radio' name='country' id='china' value='China'>China</input)");
	$("#questions").append(" <input type='radio' name='country' id='unitedstates' value='US'>United States</input)");

	linebreak;

	$("#questions").append("<h4>9. What is the official language of the United States?");
	$("#questions").append("<input type='radio' name='language' id='english' value='English'>English</input>");
	$("#questions").append(" <input type='radio' name='language' id='spanish' value='Spanish'>Spanish</input)");
	$("#questions").append(" <input type='radio' name='language' id='chinese' value='Chinese'>Chinese</input)");
	$("#questions").append(" <input type='radio' name='language' id='none' value='None'>None</input)");

	linebreak;

	$("#questions").append("<h4>10. Coding is so much fun.");
	$("#questions").append("<input type='radio' name='coding' id='true' value='True'>True</input>");
	$("#questions").append(" <input type='radio' name='coding' id='false' value='False'>False</input)");

	linebreak;

	//Add button for user to submit answers
	$("#questions").append("<br><br><button id='submit'>Submit</button>");


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

		if ($("input:radio[id='whaleshark']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='polish']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='coffee']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='southafrica']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='none']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if ($("input:radio[id='true']").is(":checked")) {
			correct++;
		}

		else {
			wrong++;
		}

		if (wrong > 1) {
			alert("You got " + correct + " questions correct, and " + wrong + " questions wrong.");
			$(window).scrollTop(0);
		}

		else {
			alert("You got " + correct + " questions correct, and " + wrong + " question wrong.");
			$(window).scrollTop(0);
		}

	

	$("#results").text("Questions answered correctly: " + correct);
	$("#results").append("<br>");
	$("#results").append("Questions answered incorrectly: " + wrong);

	});

	});