function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
  var number = "0123456789";
  var specChar = "!@#$%^&*()";

  //Reads the check/inputs for the created password.
  var passwordLength = document.getElementById("passwordLength").value;
  var checkLowercase = document.getElementById("checkLowercase").checked;
  var checkUppercase = document.getElementById("checkUppercase").checked;
  var checkNumbers = document.getElementById("checkNumbers").checked;
  var checkSpecialChars = document.getElementById("checkSpecialChars").checked;

  //Sets the conditions of the password length and characters.
  var allowedChars = "";
  if (passwordLength >= 8 && passwordLength <= 24) {
    if (checkLowercase || checkUppercase || checkNumbers || checkSpecialChars) {
      if (checkLowercase) allowedChars += lowerCase;
      if (checkUppercase) allowedChars += upperCase;
      if (checkNumbers) allowedChars += number;
      if (checkSpecialChars) allowedChars += specChar;

      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
      }

      //Prints the password to the card element on page, as an alert, and in the console.
      document.getElementById("password").value = password;
      alert("This is your new password:   " + password);
      console.log(password);

      return true;
    } else {
      alert("Please select at least one checkbox.");
    }
  } else {
    alert("Please pick a number between 8 and 24.");
  }

  return false;
}
