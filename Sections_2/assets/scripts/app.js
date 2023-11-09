const defaultResult = 0;
let currentResult = defaultResult;

function addNumber(num1, num2) {
  const result = num1 + num2;
  alert("this is  result dude ->" + result);
}

addNumber(1, 2);
addNumber(212, 2);
console.log(addNumber);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) *3/2-1`;

outputResult(currentResult, calculationDescription);
