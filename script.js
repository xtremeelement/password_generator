const charSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01233456789";
var yourPassword = "";
var numbers;

function question() {
  numbers = prompt("How long do you want your passowrd?");
 

  passwordGenerator(numbers);

  
}

function passwordGenerator(length) {
  console.log(charSet.length);
  while (length > 0) {
    yourPassword += charSet.charAt(Math.floor(Math.random() * charSet.bit length));
    console.log(yourPassword);
    length--;
    console.log(length);
    document.querySelector(".yourPass").textContent = yourPassword;
    
  }