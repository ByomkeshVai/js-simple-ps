// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

const numbersArray = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(numbersArray);
console.log(result);
