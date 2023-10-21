const input = document.querySelector("#number-input");
const submitButton = document.querySelector("#submit-btn");
const resultText = document.querySelector(".resul-text");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  resultText.innerText = average(input.value);
});

input.addEventListener("input", (e) => {
  resultText.innerText = "";
  resultText.classList.remove("error");
});

/*-----------------------------------------------------------------------------*/
const average = (list) => {
  const numbersArr = [];
  let currentNumber = "";

  for (let i = 0; i < list.length; i++) {
    const char = list[i];

    if (char === " ") {
      if (currentNumber !== "") {
        numbersArr.push(currentNumber);
        currentNumber = "";
      }
    } else {
      currentNumber += char;
    }
  }

  if (currentNumber !== "") {
    numbersArr.push(currentNumber);
  }

  let sum = 0;
  let average = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    if (isNaN(numbersArr[i])) {
      resultText.classList.add("error");
      return "Please enter only a number!";
    } else {
      sum += Number(numbersArr[i]);
    }
  }
  average = sum / numbersArr.length;
  return `The average is ${formatNumber(average)}`;
};

/*-----------------------------------------------------------------------------*/
const formatNumber = (num) => {
  if (num > 1000000) {
    return num.toExponential(2);
  } else {
    return new Intl.NumberFormat().format(num);
  }
};
