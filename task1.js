// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = (inputString) => [...inputString].reverse().join("");

const inputStr = "hello world";
const reversedStr = reverseString(inputStr);
console.log(reversedStr);
