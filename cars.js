function check(){

  var question1 = document.quiz1.question1.value;
  var question2 = document.quiz2.question2.value;
  var question3 = document.quiz3.question3.value;
  var question4 = document.quiz4.question4.value;
  var question5 = document.quiz5.question5.value;  
	var correct = 0;


	if (question1 == "BMW_1_Series_5_door") {
		correct++;
}
  if (question2 == "Yaris SedaN 2019") {
  correct++;
}
  if (question3 == "Volvo XC40") {
  correct++;
}
  if (question4 == "Mulsanne Speed") {
  correct++;
}
  if (question5 == "The BMW 4 Series Convertible") {
  correct++;
}

	var pictures = ["win.gif", "meh.jpeg", "lose.gif", "giphy.gif", "gid.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better", "Great job", "Unbelievable"];
	var range;

  if (correct == 0) {
		range = 2;
	}

	if (correct > 0 && correct < 3) {
		range = 1;
  }
  
  if (correct == 3) {
		range = 0;
  }

  if (correct == 4) {
    range = 3;
  }

  if (correct == 5) {
    range = 4;
  }

  document.getElementById("buttons").style.visibility = "visible";
	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
	};