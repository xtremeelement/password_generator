const charSet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01233456789";
var yourPassword = "";
var numbers;

function question() {
  numbers = prompt("How long do you want your passowrd?");
  //   console.log(numbers);

  passwordGenerator(numbers);

  //   document.querySelector(".yourPass").textContent = "test";
}

function passwordGenerator(length) {
  console.log(charSet.length);
  while (length > 0) {
    yourPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    console.log(yourPassword);
    length--;
    console.log(length);
    document.querySelector(".yourPass").textContent = yourPassword;
    // return yourPassword;
  }

  // for ( var i = 0; i < length; i++ ) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //  }
  //  return result;
}
