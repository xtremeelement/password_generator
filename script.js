let charSet = "";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSet = "0123456789";
const specialChars = "!@#$%^&*()[]";
var yourPassword = "";
var numbers;
var reset = "";

// Function prompst user for password length
function question() {
  charSet = "";
  numbers = prompt("How long do you want your password?");
  if (numbers < 8) {
    alert("Password must be greater than 8 characters");
  } else {
    var caps = confirm("Use uppercase characters?");
    if (caps) {
      charSet += upperCase;
    }
    var lower = confirm("Use lowercase characters?");
    if (lower) {
      charSet += lowerCase;
    }
    var special = confirm("Use special characters?");
    if (special) {
      charSet += specialChars;
    }
    var nums = confirm("Use numbers?");
    if (nums) {
      charSet += numbersSet;
    }
  }
  passwordGenerator(numbers);
}
//Calls the function that generates the password and disiplays

//This function generates a random password and displays it.
function passwordGenerator(length) {
  //chooses random letters from the charSet while length is greater than 0
  while (length > 0) {
    yourPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    length--;
    document.querySelector(".yourPass").textContent = yourPassword;
  }
  //Resets for next random generated password
  yourPassword = "";
}

//Copies password to clipboard
function copyclipboard() {
  var copyText = document.querySelector(".yourPass");
  copyText.select();
  document.execCommand("copy");
  alert(`Copied the text: ${copyText.value}`);
}
