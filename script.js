// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength; 
var confirmLower; 
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userSelection;

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = lowerCase.map(function(x){return x.toUpperCase});
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = "!#$%&‘()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start Series of Prompts 
function generatePassword() {
  passwordLength = prompt ("How many characters would you like to include in your password? Password must contain at least 8 and no more than 128 characters.");
  console.log (passwordLength);
}

if(!passwordLength) {
  alert("You did not make a valid selection. Try again.");

} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt ("You must choose a value containing at least 8 and no more than 128 characters.");
  console.log (passwordLength);

} else {
  confirmLower = confirm("Will password contain lowercase letters?");
  console.log(confirmLower);
  confirmUpper = confirm("Will password contain uppercase letters?");
  console.log(confirmUpper);
  confirmNumber = confirm("Will password contain numbers?");
  console.log(confirmNumber);
  confirmSpecial = confirm("Will password contain special characters?");
  console.log(confirmSpecial);
};

//No response
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userSelection = alert("Must choose which criteria to include in password");

// Confirm all 4 options 
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userSelection = lowerCase.concat(upperCase, numbers, special);
  console.log(userSelection);

//Confirm 3 out of 4 options 
} else if (confirmLower && confirmUpper && confirmNumber) {
  userSelection = lowerCase.concat(upperCase, numbers);
  console.log (userSelection);

} else if (confirmLower && confirmUpper && confirmSpecial) {
  userSelection = lowerCase.concat (upperCase, special);
  console.log (userSelection);

} else if (confirmLower && confirmNumber && confirmSpecial) {
  userSelection = upperCase.concat(numbers, special);
  console.log (userSelection);

} else if (confirmUpper && confirmNumber && confirmSpecial) {
  userSelection = upperCase.concat(numbers, special);
  console.log (userSelection);

//Confirm 2 out of the 4 options 
} else if (confirmLower && confirmUpper) {
  userSelection = lowerCase.concat(upperCase);
  console.log (userSelection);

} else if (confirmLower && confirmNumber) {
  userSelection = lowerCase.concat(numbers);
  console.log (userSelection);

} else if (confirmLower && confirmSpecial) {
  userSelection = lowerCase.concat(special);
  console.log (userSelection);

} else if (confirmUpper && confirmNumber) {
  userSelection = upperCase.concat(numbers);
  console.log (userSelection);

} else if (confirmUpper && confirmSpecial) {
  userSelection = upperCase.concat(special);
  console.log (userSelection); 

} else if (confirmNumber && confirmSpecial) {
  userSelection = numbers.concat(special);
  console.log (userSelection);

//Confirm 1 out of 4 options 
} else if (confirmLower) {
  userSelection = lowerCase; 
  console.log (userSelection);

} else if (confirmUpper) {
  userSelection = upperCase; 
  console.log (userSelection);

} else if (confirmNumber) {
  userSelection = numbers;
  console.log (numbers);

} else if (confirmSpecial) {
  userSelection = special;
  console.log (special);
};

//For loop for password generator 
for (var i = 0; i < passwordLength; i++) {
  var passwordGenerated = userSelection[Math.floor(Math.random() * userSelection.length)];
  console.log (passwordGenerated);

}
