var characterLength = 8;
var choiceArr = [];

var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
var upperCase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
var specialCharacters = [
  "!", "#", "$", "%", "&", "@", "'", "(", ")", "[", "]", "{", "}", "*", "+", "-", ".", "/", ":", ";", "<", ">", "=", "?", "^", "_", "`", "|", "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(
    prompt(
      "How many characters do you want your password to be? (8-128 characters)"
    )
  );

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be a number, 8 - 128 digits. Please try again."
    );
    getPrompts();
    return false;
  }

  if (confirm("would you like lowecase letters in your password")) {
    choiceArr = choiceArr.concat(lowerCase);
  }
  if (confirm("would you like uppercase letters in your password")) {
    choiceArr = choiceArr.concat(upperCase);
  }
  if (confirm("would you like special characters letters in your password")) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  if (confirm("would you like numbers in your password")) {
    choiceArr = choiceArr.concat(numbers);
  } else {
    choiceArr = choiceArr.concat("");
  }
  return true;
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
