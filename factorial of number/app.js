const input = document.querySelector("#number-input");
const submitButton = document.querySelector("#submit-btn");
const resultText = document.querySelector(".resul-text");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  resultText.innerText = factorialOfEvenNumber(input.value);
});

input.addEventListener("input", (e) => {
  resultText.innerText = "";
  resultText.classList.remove("error");
});

/*-----------------------------------------------------------------------------*/
const factorail = (num) => {
  if (num == 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

/*-----------------------------------------------------------------------------*/
const formatNumber = (num) => {
  if (num > 1000000) {
    return num.toExponential(2);
  } else {
    return new Intl.NumberFormat().format(num);
  }
};

/*-----------------------------------------------------------------------------*/

const factorialOfEvenNumber = (num) => {
  if (isNaN(num)) {
    resultText.classList.add("error");
    return "Please enter only a number!";
  } else {
    if (num < 0 || num > 100) {
      resultText.classList.add("error");
      return "Please enter a positive number between 1 and 100 !";
    } else {
      resultText.classList.remove("error");
      let result = factorail(num);
      let formattedResult = formatNumber(result);
      return `The factorial is ${formattedResult}`;
    }
  }
};
/*-----------------------------------------------------------------------------*/
