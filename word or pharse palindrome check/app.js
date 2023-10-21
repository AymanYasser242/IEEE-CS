const input = document.querySelector("#number-input");
const submitButton = document.querySelector("#submit-btn");
const resultText = document.querySelector(".resul-text");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  resultText.innerText = palindrome(input.value);
});

input.addEventListener("input", (e) => {
  resultText.innerText = "";
  resultText.classList.remove("error");
});


/*-----------------------------------------------------------------------------*/
const palindrome = (phrase) => {
  const string = phrase.match(/[a-zA-Z]+/g).join('').toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if(string[i] != string[string.length - i - 1]){
      return `The phrase is non-palindrome`;
    }
  }
  return `The phrase is palindrome`;
};

/*-----------------------------------------------------------------------------*/
const formatNumber = (num) => {
  if (num > 1000000) {
    return num.toExponential(2);
  } else {
    return new Intl.NumberFormat().format(num);
  }
};
