// Write a JavaScript program to find the most frequent item of an array?
const a = [1, 4, 3, 44, 4, 5, 6];

function mostFrequent(a) {
  const frequencies = {};
  
  for (const item of a) {
    if (frequencies[item]) {
      frequencies[item]++;
    } else {
      frequencies[item] = 1;
    }
  }
  
  let mostFrequentItem = null;
  let highestFrequency = 0;
  
  for (const item in frequencies) {
    if (frequencies[item] > highestFrequency) {
      mostFrequentItem = item;
      highestFrequency = frequencies[item];
    }
  }
  
  // Return the most frequent item.
  return mostFrequentItem;
}

const mostFrequentItem = mostFrequent(a);
console.log("Most frequent item:", mostFrequentItem);  // Output: 4
