const defaultResult = 0;
let currentResult = defaultResult;

function addNumber() {
  const currentResult = currentResult + userInput.value;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener("click", "");

currentResult = addNumber(12, 123);
let calculationDescription = currentResult;
