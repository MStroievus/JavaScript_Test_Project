//? Exercise: Functions
// Time to practice functions!

// Your task is to define two new functions:

// A function called subtract which takes two numbers as inputs and returns the difference.

// A second function, called stringify, which takes a number as an input and returns a string that includes the number (e.g., "Result: 10" for the input 10).

// The first function (subtract) should be callable like this:

// subtract(12, 10);
// and then return 2 (for this example, where 12 and 10 are passed as values).

// The second function (stringify) should be callable like this:

// stringify(10);
// and then return a string that includes the number - for example "Result: 10".

const subtract = (num1, num2) => num1 - num2;

const stringify = (num1) => `Result: ${num1}`;
