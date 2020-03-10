// Global Variables

// Array of words

var wordList = ["javascript", "mongoose", "jquery", "framework", "variable", "asynchronus", "bootstrap", "iteration", "object", "whiteboarding", "fizzbuzz"]
// Solution heald here
var chosenWord = "";
// This  will break the solution into indevidual letters
var lettersInChosenWord = [];
// This Will be the enumber of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters
var blankAndSucesss = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game Counters

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// -----------------Game Code------------------//