// Assignment Code
//targets generate ID
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghiklmnopqrstuvwxyz";
var capletters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var specialchar = "!@#$%^&*()<>?_+~-";
var numbers = "0123456789";



function generatePassword() {
  console.log("Your Button Works!")

//window prompt  
let pwLength = prompt("Choose length of password between 8 and 128 characters");
if (pwLength <= 8 || pwLength >= 128) {
alert("Try again")
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
