// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength; 
var confirmLower; 
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userSelection;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ",", "-", ".", "/", "<", "=", ">", "?", "[", "]", "`", "{", "|", "}", "~"];

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
  
if(!passwordLength) {
  alert("You did not make a valid selection. Try again.");

} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt ("You must choose a value containing at least 8 and no more than 128 characters.");


} else {
  confirmLower = confirm("Will password contain lowercase letters?");
  confirmUpper = confirm("Will password contain uppercase letters?");
  confirmNumber = confirm("Will password contain numbers?");
  confirmSpecial = confirm("Will password contain special characters?");
  
};

//No response
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userSelection = alert("Must choose which criteria to include in password");

// Confirm all 4 options 
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userSelection = lowerCase.concat(upperCase, numbers, special);

//Confirm 3 out of 4 options 
} else if (confirmLower && confirmUpper && confirmNumber) {
  userSelection = lowerCase.concat(upperCase, numbers);

} else if (confirmLower && confirmUpper && confirmSpecial) {
  userSelection = lowerCase.concat (upperCase, special);

} else if (confirmLower && confirmNumber && confirmSpecial) {
  userSelection = upperCase.concat(numbers, special);

} else if (confirmUpper && confirmNumber && confirmSpecial) {
  userSelection = upperCase.concat(numbers, special);

//Confirm 2 out of the 4 options 
} else if (confirmLower && confirmUpper) {
  userSelection = lowerCase.concat(upperCase);

} else if (confirmLower && confirmNumber) {
  userSelection = lowerCase.concat(numbers);

} else if (confirmLower && confirmSpecial) {
  userSelection = lowerCase.concat(special);

} else if (confirmUpper && confirmNumber) {
  userSelection = upperCase.concat(numbers);

} else if (confirmUpper && confirmSpecial) {
  userSelection = upperCase.concat(special); 

} else if (confirmNumber && confirmSpecial) {
  userSelection = numbers.concat(special);

//Confirm 1 out of 4 options 
} else if (confirmLower) {
  userSelection = lowerCase; 

} else if (confirmUpper) {
  userSelection = upperCase; 

} else if (confirmNumber) {
  userSelection = numbers;

} else if (confirmSpecial) {
  userSelection = special;

};

var passwordCharacters = [];

//For loop for random selection 
for (var i = 0; i < passwordLength; i++) {
  var passwordGenerated = userSelection[Math.floor(Math.random() * userSelection.length)];
  passwordCharacters.push(passwordGenerated);

}

//Return password
var password = passwordCharacters.join("");
return password;
}
