//Below are the letters that are to be chosen from myself or the computer//

var randomLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];

// these are the list of the main varibles//
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var compLetter = [];

/*the function given is active once you pick a letter the computer picks a random letter
and will show the letters that are in the dom*/
var newCompLetter = function () {
  compLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
  console.log(compLetter);
};

var newGuessLeft = function () {
  document.querySelector('#guessesleft-text').innerHTML = 'Guesses Left: ' + guessLeft;
};
// this stores all the letters that are given on the screen so you can keep track of the letters already chosen//
var newGuessSoFar = function () {
  document.querySelector('#guesssofar-text').innerHTML = 'Your guesses so far:' + guessSoFar.join(', ');
};

//this resets the functions after the wins and losses//
var reset = function () {
  guessLeft = 9;
  guessSoFar = [];

  newGuessLeft();
  newGuessSoFar();
  newCompLetter();
};
// here once you press a key is pressed its your turn then it subtracts by 1//
document.onkeyup = function (event) {
  guessLeft--;

  console.log(event.key);
  console.log(guessSoFar);
  //this allows the user to guess lower case//
  var userLetter = String.fromCharCode(event.keyCode).toLowerCase();

  //this pushed the guessSoFar to userLetter//
  guessSoFar.push(userLetter);
  newGuessLeft();
  newGuessSoFar();

  /*the start  of the if statements stating if user guess letter is correct
  he/she wins and guesses left runs out, you lose*/
  if (guessLeft > 0) {
    if (userLetter == compLetter) {
      wins++;
      document.querySelector('#wins-text').innerHTML = 'Wins: ' + wins;

      reset();
    }
  } else if (guessLeft == 0) {
    losses++;
    document.querySelector('#losses-text').innerHTML = 'Losses: ' + losses;

    reset();
  }

};
