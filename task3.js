//  Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
  // Create an object to store the frequency of each element
  const frequencyMap = {};

  // Find the frequency of each element in the array
  for (const element of arr) {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }
  }

  // Find the most frequent element and its frequency
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(array);
console.log(mostFrequent);
