// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength; 
var confirmLower; 
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

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
  alert("You did not pick a valid option. Try again.");

} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt ("You must choose a value containing at least 8 and no more than 128 characters.");
  console.log (passwordLength);

} else {
  confirmLower = confirm("Will password contain lower case letters?");
  console.log(confirmLower);
  confirmUpper = confirm("Will password contain upper case letters?");
  console.log(confirmUpper);
  confirmNumber = confirm("Will password contain numbers?");
  console.log(confirmNumber);
  confirmSpecial = confirm("Will password contain special characters?");
  console.log(confirmSpecial);
};

//No response
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("Must choose which criteria to include in password");
// 4 true options
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
};