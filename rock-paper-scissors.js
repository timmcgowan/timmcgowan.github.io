
var paInput = '';
var pbInput = '';
var windowReference;

function promptForTwo() {
  var w = 480, h = 340;

  if (window.screen) {
    w = screen.availWidth;
    h = screen.availHeight;
  }

  var popW = 300, popH = 150;
  var leftPos = (w-popW)/2, topPos = (h-popH)/2;

  window.open('popup.htm','windowName','width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);

  if (!windowReference.opener)
    windowReference.opener = self;
}

function done() {
  alert('Player A = ' + painput + '\nPlayer B = ' + pbinput);
}

promptForTwo();
//--></script>


var validInputs = ["rock", "paper", "scissors", "exit"];

/*
If PA = Rock
	If PB = Scissor 
		Then PA wins 
	Else 
		PB Wins
If PA = Scissors
	If PB = Paper
		then PA Wins
	Else 
		PB Wins
If PA = Paper
	If PB = Rock
		Then PA Wins
	Else 
	 	PB Wins
Else
	Exit 
*/

