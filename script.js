// Assignment Code
//targets generate ID
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghiklmnopqrstuvwxyz".split("");
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
var specialChar = "!@#$%^&*<>?_+~-".split("");
var numbers = "0123456789".split("");



function generatePassword() {
  console.log("Your Button Works!")

//window prompt  
let pwLength = prompt("Choose the length you want your password to be. It must be between 8 and 128 characters");
if (pwLength < 8 || pwLength > 128) {
alert("Really? Let's try this again. Click Generate, then enter a number between 8 and 128.")
}
{
alert("sweet! Let's choose some characters to use in your password. Use at least one! Press OK!")
}
let lowLetters = confirm("Lower case letters sound cool to use, click OK to include these.");
if (lowLetters) {
  alert("Awesome! ✨");
} else {
  alert("😕 No problem, we can use other characters.")
}
let capLetters = confirm("Do upper case letters sound like something you want to use?");
if (capLetters) {
  alert("Fire! 🔥");
} else {
  alert("🤨 Alright, we can use other characters.")
}
let numbers = confirm("How about we toss in some nifty numbers?");
if (numbers) {
  alert("Piece of cake! 🍰");
} else {
  alert("🙄 Okay, we can use other characters.")
}
let specialChar = confirm("Special characters are pretty gnarly, want to include these?");
if (specialChar) {
  alert("You are cooler than 💩!");
} else {
  alert("🥱 Fine, but I hope you chose at least one set of characters.")
}
  return "generated password";
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
