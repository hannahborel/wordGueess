// Global Variables

// Array of words

var wordList = ["javascript", "mongoose", "jquery", "framework", "variable", "asynchronus", "bootstrap", "iteration", "object", "whiteboarding", "fizzbuzz"];
// Solution heald here
var chosenWord = "";
// This  will break the solution into indevidual letters
var lettersInChosenWord = [];
// This Will be the enumber of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters
var blanksAndSucesss = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game Counters

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// -----------------Game Code------------------//

function startGame(){

    // resets guesses back to 0
    numGuesses = 9;

    // solution chosen radndomly from word list
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)]
    //break word into indevidual letters
    lettersInChosenWord = chosenWord.split("");
    // count the number of letters in the word
    numBlanks = lettersInChosenWord.length

    //print soltuion in console(testing)
    console.log(chosenWord)

    // Reset the guess and cucess array
    blanksAndSucesss = [];
    // Reset the wrong guesses.
    wrongGuesses = [];

    // Fill up the blanks and Sucesses list with the appropriate number of blanks.
    for(var i = 0; i < lettersInChosenWord.length; i++){
        blanksAndSucesss.push("_");
    };

    // Print the inital blanks in the console
    console.log(blanksAndSucesss);
    

    // reprints the guesses left to 9
     document.getElementById("guesses-left").innerHTML = numGuesses

     //prints the blanks at the beginnin of each round in the HTML
     document.getElementById("word-blanks").innerHTML = blanksAndSucesss.join(" ")

     // clears the wrong guesses from the previous round
     document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

     //------------Letter check---------------------//

     function checkLetters(letter){


        var letterInWord = false;
        console.log(numBlanks)
        // check if letter exists inside the array at all

        for(var i = 0; i < numBlanks; i++){
            if (chosenWord[i] === letter){
                letterInWord = true;
                console.log(letterInWord)
            }
        }

        // if the letter exists somewhere in the word then figure out where

        if(letterInWord){

            for(var j = 0; j <numBlanks; j++){

                if(chosenWord[j]=== letter){
                   blanksAndSucesss[j] = letter;
                }
            }

            console.log(blanksAndSucesss);
        }
        else {
            //add letter to list of wrong letters and subtract guesses
            wrongGuesses.push(letter);
            numGuesses--;
        } 
     }

    //  --------Run after each guess is made -------

    function roundComplete() {
        // initial status update
        console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses)

        // update DOM to reflect the new number of guesses. 

        document.getElementById("guesses-left").innerHTML = numGuesses;
        document.getElementById("word-blanks").innerHTML = blanksAndSucesss.join(" ");
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ")

        if(lettersInChosenWord.toString() === blanksAndSucesss.toString()){
            // add to the win counter and give user an alert

            winCounter++;
            alert("You are a coding Ninja! You Win!")

            // update win counter in HTML & restart the game

            document.getElementById("win-counter").innerHTML = winCounter;
            startGame()
        }

        // if we've run out of guessess..
        else if(numGuesses === 0 ){
            lossCounter++;
            //give alert
            alert("We all looked at your git hub and laughed. Keep practicing.")

            // update loss counter to DOM

            document.getElementById("loss-counter").innerHTML = lossCounter
            // restart game
            startGame()
        }
    }



startGame();

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete()
   
}





