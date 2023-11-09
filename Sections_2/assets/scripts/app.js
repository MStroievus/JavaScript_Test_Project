const defaultResult = 0;
let currentResult = defaultResult;

function addNumber(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = addNumber(12, 123);
let calculationDescription = currentResult;

outputResult(currentResult, calculationDescription);
