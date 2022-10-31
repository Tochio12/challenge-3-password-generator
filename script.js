// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar= "!@#$%^&*()_-+=[]{}:;',./<>?|";
var passwordLength;

function lengthDetermine() {
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength < 8) {
        alert("Password length must be a number between 8-128 characters ");
        lengthDetermine();
    }else if (passwordLength > 128) {
        alert("Password length must be a number between 8-128 characters ");
        lengthDetermine();
    }else if (isNaN(passwordLength)) {
        alert("Password length must be a number between 8-128 characters ");
        lengthDetermine();
    }else {
        alert("The next questions will ask you if you want to include uppercase letters, numbers, and special characters. If 'No' is selcted for all then your password will only contain lower case letters. ");
    }
}

function uppercaseDetermine() {
    uppercase = prompt("Would you like to include uppercase letters in you password?\n (Yes or No)");
}



function generatePassword() {
    lengthDetermine();
    console.log(lengthDetermine);
    uppercaseDetermine();
    console.log(uppercaseDetermine);
  return "generated password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);