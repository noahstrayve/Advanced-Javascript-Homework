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
      console.log("IT IS TIME TO CHOOSE\n");

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

			if (this.letterInput === blanksAndSuccesses[i]) {
				console.log("you checked it!")
				//push the letter into blanksAndSuccesses
				console.log(blanksAndSuccesses)
				//call function for letter input again
				

			} else {
				console.log("not in there")
				console.log(blanksAndSuccesses)
				//call function for letter input again
				
			}
		});
    }
    else {
      console.log("\nOkay... I wasn't wanting to play with you anyways...\n");
    }
  });

  if (blanksAndSuccesses === chosenWord) {
  	console.log("YOU DID IT!!!!!")
  }
