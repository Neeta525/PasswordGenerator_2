// Assignment Code
//targets generate ID
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghiklmnopqrstuvwxyz".split("");
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
var specialChar = "!@#$%^&*<>?_+~-".split("");
var numbers = "0123456789".split("");
var pwLength = '';

function generatePassword() {
  console.log("Your Button Works!")

//window prompt - length of pw 
let pwLength = prompt("Choose the length you want your password to be. It must be between 8 and 128 characters");
//is user presses cancel, function ends
if (!pwLength) {
  return;
}
//If a number not in range is entered will alert the following message
if (pwLength < 8 || pwLength > 128) {
prompt("Really? Let's try this again. Click Generate, then enter a number between 8 and 128.")
}
{
alert("Sweet! Let's choose some characters to use in your password. Use at least one! Press OK!")
}
//asks user if they want lower case letters
let yesLowLetters = confirm("Lower case letters sound cool to use, click OK to include these.");
if (yesLowLetters == true) {
  alert("Awesome! ✨");
} else {
  alert("😕 No problem, we can use other characters.")
}
var yesLowCase = lowLetters.concat(lowLetters);
///asks user if they want upper case letters
let yesCapLetters = confirm("Do upper case letters sound like something you want to use? Click OK");
if (yesCapLetters == true) {
  alert("Fire! 🔥");
} else {
  alert("🤨 Alright, we can use other characters.")
}
var yesCapCase = capLetters.concat(capLetters);
//asks user if they want numbers
let yesNumbers = confirm("How about we toss in some nifty numbers? Click OK");
if (yesNumbers == true) {
  alert("Piece of cake! 🍰");
} else {
  alert("🙄 Okay, we can use other characters.")
}
var yesNum = numbers.concat(numbers);
//asks user if they want special characters
let yesSpecialChar = confirm("Special characters are pretty gnarly, press OK to include these");
if (yesSpecialChar == true) {
  alert("You are cooler than 💩!");
} else {
  alert("🥱 Fine, but I hope you chose at least one set of characters.")
}
var yesSpecial = specialChar.concat(specialChar);
if (!yesLowLetters && !yesCapLetters && !yesNumbers && !yesSpecialChar) {
  alert("Please select at least one criteria!")
}
let charOptions = [].concat(yesCapCase, yesLowCase, yesNum, yesSpecial);
console.log(charOptions);
var theGeneratedOne = [];
for (var i = 0; i <= pwLength; i++) {
  theGeneratedOne +- charOptions[Math.floor(Math.random() * charOptions.length)];
 }
 return theGeneratedOne.join('');
}
// Write password to the #password input
//calls the writePassword function
function writePassword() {

//stores generatepassword into the variable password
  var password = generatePassword();

//refers to the displayed password card on the screen
  var passwordText = document.querySelector("#password");


//takes the value and displays it on the screen
  passwordText.value = password;

}

// Add event listener to generate button
//calls the writePassword function
generateBtn.addEventListener("click", writePassword);
