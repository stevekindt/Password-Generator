// Put DOM elments here

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var symbolsEl = document.getElementById("symbols");
var numbersEl = document.getElementById("numbers");
var lowercaseEl = document.getElementById("lowercase");
var uppercaseEl = document.getElementById("uppercase");
var generateEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");

alert("Choose which types of characters you'd like to include in your password. Your password must be between 8 and 128 characters.");



// Random generator functions

function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

// Ensure that at least one character type is chosen with a check (if/else where else is null?) and alert user to select at least one type
// List selectable characters in a string or array?
// Maybe password output is defaulted to "Your Secure Password" as text and it's replaced with the password generated upon event? Need to use preventDefault in that case?
