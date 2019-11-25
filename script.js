const charSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01233456789";
var yourPassword = "";
var numbers;

// Function prompst user for password length
function question() {
  numbers = prompt("How long do you want your passowrd?");
  //Calls the function that generates the password and disiplays
  passwordGenerator(numbers);
}

//This function generates a random password and displays it.
function passwordGenerator(length) {
  while (length > 0) {
    yourPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    length--;
    document.querySelector(".yourPass").textContent = yourPassword;
  }
}

function copyclipboard() {
  console.log("test");

  var copyText = document.querySelector(".yourPass");

  copyText.select();

  document.execCommand("copy");
  alert(`Copied the text: ${copyText.value}`);
}
