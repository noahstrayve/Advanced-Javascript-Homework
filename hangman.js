var inquirer = require('inquirer');

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wordList = ["bulls",
"sixers",
"pacers",
"pistons",
"cavaliers",
"celtics",
"warriors",
"thunder",
"spurs",
"lakers",
"clippers",
"bucks",
"timberwolves",
"trailblazers",
"kings",
"suns",
"jazz",
"nuggets",
"rockets",
"mavericks",
"pelicans",
"grizzlies",
"hawks",
"magic",
"heat",
"hornets",
"wizards",
"raptors",
"knicks",
"nets"]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = "_";
var blanksAndSuccesses = [];
var wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "Would you like to play a game of Hangman?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },

  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("Here's your first question\n");

      console.log(blanksAndSuccesses)

      inquirer
  		.prompt([
    		// Here we create a basic text prompt.
    		{
      			type: "input",
      			message: "Guess a letter!",
      			name: "letterInput"
    		},
		])
		.then(function(checkForLetter) {
			var letterInWord = false;

    		for(var i = 0; i < numBlanks; i++){
        
        		if(chosenWord[i] === letter){
            	letterInWord = true;

        		}
    		}

    		if(letterInWord){
        
        		for(i = 0; i < numBlanks; i++){
            
            		if(chosenWord[i] === letter){
            		blanksAndSuccesses[i] = letter;
            		console.log(blanksAndSuccesses)
            		}

        		}
    
    		}

    		else{
        		numGuesses --;
        	
    		}
		});
    }
    else {
      console.log("\nOkay... I wasn't wanting to play with you anyways...\n");
    }
  });
