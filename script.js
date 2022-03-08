// Assignment Code
//tagets generate ID
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Clicked Button!")

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
