// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (romanNumeral) => {
  const romanToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return romanNumeral
    .split("")
    .reduce((result, currentNumeral, index, array) => {
      const currentValue = romanToIntMap[currentNumeral];
      const nextValue = romanToIntMap[array[index + 1]];

      if (nextValue > currentValue) {
        return result - currentValue;
      } else {
        return result + currentValue;
      }
    }, 0);
};

console.log(romanToInteger("IX")); // Output: 9
console.log(romanToInteger("XXI")); // Output: 21
console.log(romanToInteger("MCMXCIV")); // Output: 1994
