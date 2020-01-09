// Put DOM elments here

// Use confirm (Y/N) or prompt (if necessary) to allow user to choose character types

// let includeSpecials = confirm("Would you like to include special characters in your password?");

// alert(includeSpecials);

// let includeNumbers = confirm("Would you like to include numbers in your password?");

// alert(includeNumbers);

// let includeLowers = confirm("Would you like to include lowercase letters in your password?");

// alert(includeLowers);

// let includeUppers = confirm("Would you like to include uppercase letters in your password?");

// alert(includeUppers);

alert("Choose which types of characters you'd like to include in your password. Your password must be between 8 and 128 characters.");



// Random generator functions

function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

// Ensure that at least one character type is chosen with a check (if/else where else is null?) and alert user to select at least one type
// List selectable characters in a string or array?
// Maybe password output is defaulted to "Your Secure Password" as text and it's replaced with the password generated upon event? Need to use preventDefault in that case?
