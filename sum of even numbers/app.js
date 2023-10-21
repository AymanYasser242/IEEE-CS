const input = document.querySelector("#number-input");
const submitButton = document.querySelector("#submit-btn");
const resultText = document.querySelector(".resul-text");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  resultText.innerText = sumOfEvenNumbers(input.value);
});

input.addEventListener("input", (e) => {
  resultText.innerText = "";
  resultText.classList.remove("error");
});

/*-----------------------------------------------------------------------------*/
const sum = (num) =>{
    let result = 0;
    for (let i = 1; i <= Number(num); i++) {
      if (i % 2 === 0) {
        result += i;
      }
    }
    return result;
}

/*-----------------------------------------------------------------------------*/
const formatNumber = (num) => {
  if (num > 1000000) {
    return num.toExponential(2);
  } else {
    return new Intl.NumberFormat().format(num);
  }
};
/*-----------------------------------------------------------------------------*/

const sumOfEvenNumbers = (num) => {
  if (isNaN(num)) {
    resultText.classList.add("error");
    return "Please enter only a number!";
  } else {
    if (num < 1 || num > 1000000) {
      resultText.classList.add("error");
      return "Please enter a positive number between 1 and 1,000,000 !";
    } else {
      resultText.classList.remove("error");
      let result = sum(num);
      let formattedResult = formatNumber(result);
      return `The Sum is ${formattedResult}`;
    }
  }
};

/*-----------------------------------------------------------------------------*/