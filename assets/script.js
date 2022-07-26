// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXZY")
var number = ("0123456789");
var specChar = ("!@#$%^&*()");


// Write password to the #password input
function writePassword() {

  var password = "";
  var passwordText = "";

//Sets the conditions of the password length and characters
  let inputLength = prompt("Please choose how long you would like your password to be. It must be between 8 and 128 characters long.");
  inputLength = parseInt(inputLength);

  if (inputLength < 8){
    alert("Password must be at least 8 characters.");
    return "";
  }

  if (inputLength > 128) {
    alert("Password may not exceed 128 characters.");
    return "";
  }

  var inputLowerCase = confirm("Do you want lower case letters in your password?");

  if (inputLowerCase) {
      passwordText = lowerCase;
  }

  var inputUpperCase = confirm("Do you want any upper case letters?");

  if(inputUpperCase) {
    passwordText = passwordText.concat(upperCase)
  }

  var inputNumber = confirm("Do you want to add a number?");

  if(inputNumber) {
    passwordText = passwordText.concat(number)
  }

  var inputSpecChar = confirm("How about a special character?");

  if(inputSpecChar) {
    passwordText = passwordText.concat(specChar)
  }

  for (var i = 0; i < inputLength; i++) {
    password = password + passwordText[Math.floor(Math.random() * passwordText.length)]
  }

//Prints the password to the console, as an alert, and the password box on page.
passwordEl = document.querySelector("#password");
passwordEl.textContent = password;
alert("This is your new password:   " + password)
console.log (password);
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
