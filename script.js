// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar= "!@#$%^&*()_-+=[]{}:;',./<>?|";
var lengthPassword;
var checkUppercase;
var checkSpecial;

//figuring out how many characters the user wants
function lengthDetermine() {
    lengthPassword = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (lengthPassword < 8) {
        alert("Password length must be a number between 8-128 characters ");
        lengthDetermine();
    }else if (lengthPassword > 128) {
        alert("Password length must be a number between 8-128 characters ");
        lengthDetermine();
    }else if (isNaN(lengthPassword)) {
        alert("Password length must be a number between 8-128 characters ");
        lengthDetermine();
    }
}

//asking user is they want uppercase in their password 
function uppercaseDetermine() {
    checkUppercase = prompt("Would you like to include uppercase letters in your password?\n (yes or no)");
    checkUppercase = checkUppercase.toLowerCase();

    if (checkUppercase === "" || checkUppercase === null) {
        alert("Answer yes or no");
        uppercaseDetermine();
    }else if (checkUppercase === "yes") {
        checkUppercase = true;
        return checkUppercase;
    }else if (checkUppercase === "no") {
        checkUppercase = false;
        return checkUppercase;
    }else {
        alert("Answer yes or no");
        uppercaseDetermine();
    }
    return checkUppercase;
}

//figuring out if user wants to include special characters

function specialDetermine() {
    checkSpecial = prompt("Would you like to include special characters in your password\n (yes or no)");
    checkSpecial = checkSpecial.toLowerCase();

    if (checkSpecial === "" || checkSpecial === null) {
        alert("Answer yes or no");
        specialDetermine();
    }else if (checkSpecial === "yes") {
        checkSpecial = true;
        return checkSpecial;
    }else if (checkSpecial === "no") {
        checkSpecial = false;
        return checkSpecial;
    }else {
        alert("Answer yes or no");
        specialDetermine();
    }
    return checkSpecial;
}


function generatePassword() {
    lengthDetermine();
    console.log(lengthDetermine);
    uppercaseDetermine();
    console.log(uppercaseDetermine);
    specialDetermine();
    console.log(specialDetermine);
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