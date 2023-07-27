// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function simpleCalculator(num1, operator, num2) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error(
        "Invalid operator. Supported operators are +, -, *, and /."
      );
  }

  return result;
}

console.log(simpleCalculator(5, "+", 3)); // Output: 8 (5 + 3)
console.log(simpleCalculator(10, "-", 4)); // Output: 6 (10 - 4)
console.log(simpleCalculator(6, "*", 2)); // Output: 12 (6 * 2)
console.log(simpleCalculator(15, "/", 3)); // Output: 5 (15 / 3)
