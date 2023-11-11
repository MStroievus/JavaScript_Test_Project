const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescriptions = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescriptions);
}

function addNumber() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", addNumber);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
