// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    throw new Error("Input should be an array with at least two elements.");
  }

  const uniqueNumbers = [...new Set(numbers)];
  if (uniqueNumbers.length < 2) {
    throw new Error("The array should contain at least two unique elements.");
  }

  const [firstSmallest, secondSmallest] = uniqueNumbers.sort((a, b) => a - b);
  return secondSmallest;
};

const numbersArray = [10, 4, 7, 2, 9, 3, 1];
const secondSmallest = findSecondSmallest(numbersArray);
console.log(secondSmallest); // Output: 2 (second smallest element in the array)
