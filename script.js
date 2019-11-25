const charSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01233456789";
var yourPassword = "";
var numbers;
var reset = "";

// Function prompst user for password length
function question() {
  numbers = prompt("How long do you want your password?");
  //Calls the function that generates the password and disiplays
  passwordGenerator(numbers);
}

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
