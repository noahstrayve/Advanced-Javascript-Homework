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
"nets"];

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
    {
      type: "input",
      message: "Would you like to play a game of Hangman?",
      name: "playGame"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirmGuess",
      default: true
    },

  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirmGuess) {
      console.log("IT IS TIME TO CHOOSE\n");
//DELETE DELETE
      console.log("ONLY DOING THIS FOR TESTING PURPOSES DELTE THIS CODE LATER")
      console.log(chosenWord)
//DELETE DELETE

      console.log(blanksAndSuccesses)
//guess();
      inquirer
  		.prompt([
    		{
      			type: "input",
      			message: "Guess a letter!",
      			name: "letterInput"
    		},
		])
			if (this === lettersInChosenWord) {
				console.log("you checked it!")
				console.log("it's in there")
				for (var i = 0; i < lettersInChosenWord.length; i++) {
					lettersInChosenWord[i].push()
				}
				//push the letter into blanksAndSuccesses
				console.log(blanksAndSuccesses)
				//call function to begin letter input sequence again
			} else {
				console.log("you checked it!")
				console.log("not in there")
				console.log(blanksAndSuccesses)
				//call function to begin letter input sequence again		
			}

    }
    else {
      console.log("\nOkay... I wasn't wanting to play with you anyways...\n");
    }
  });

  


  if (blanksAndSuccesses === lettersInChosenWord) {
  	console.log("YOU DID IT!!!!!")
  }
