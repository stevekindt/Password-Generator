// Alert with user instructions

alert("Choose which types of characters you'd like to include in your password. Your password must be between 8 and 128 characters.");

// DOM elments

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var symbolsEl = document.getElementById("symbols");
var numbersEl = document.getElementById("numbers");
var lowercaseEl = document.getElementById("lowercase");
var uppercaseEl = document.getElementById("uppercase");
var generateEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");

// Character types

var symbols = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var numbers = "0123456789";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// Event listener upon click to verify checked character types

generate.addEventListener("click", () => {
	var length = +lengthEl.value;
	var hasSymbol = symbolsEl.checked;
	var hasNumber = numbersEl.checked;
	var hasLower = lowercaseEl.checked;
	var hasUpper = uppercaseEl.checked;

	resultEl.innerText = generatePassword(hasSymbol, hasNumber, hasLower, hasUpper, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

	// Doesn't have any character types selected
	if (typesCount === 0) {
		return "ERROR! You need to select at least 1 character type to get a password!";
	}

	// create a loop
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

// Functions to get random characters from strings

function getRandomSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomLower() {
	return lowers[Math.floor(Math.random() * lowers.length)];
}

function getRandomUpper() {
	return uppers[Math.floor(Math.random() * uppers.length)];
}

// Copy to clipboard function and alert to user

function copy() {
	let textarea = document.getElementById("result");
	textarea.select();
	document.execCommand("copy");
	alert("Password copied to clipboard");
}