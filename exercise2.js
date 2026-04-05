const highTemperatures = [55, 57, 53, 47, 56, 50];
const lowTemperatures = [33, 30, 29, 35, 31, 32];

// 1. Print the highest temperature to the console.
let highestTemp = highTemperatures[0];
for (let i = 1; i < highTemperatures.length; i++) {
  if (highTemperatures[i] > highestTemp) {
    highestTemp = highTemperatures[i];
  }
}
console.log("Highest temperature:", highestTemp);

// 2. Print the lowest temperature to the console.
let lowestTemp = lowTemperatures[0];
for (let i = 1; i < lowTemperatures.length; i++) {
  if (lowTemperatures[i] < lowestTemp) {
    lowestTemp = lowTemperatures[i];
  }
}
console.log("Lowest temperature:", lowestTemp);

// 3. What is the average high temperature from the data set?
let sumHigh = 0;
for (let i = 0; i < highTemperatures.length; i++) {
  sumHigh += highTemperatures[i];
}
let avgHighTemperature = sumHigh / highTemperatures.length;
console.log("Average high temperature:", avgHighTemperature);

// 4. What is the average low temperature from the data set?
let sumLow = 0;
for (let i = 0; i < lowTemperatures.length; i++) {
  sumLow += lowTemperatures[i];
}
let avgLowTemperature = sumLow / lowTemperatures.length;
console.log("Average low temperature:", avgLowTemperature);

// 5 and 6. Median function
function sortArray(arr) {
  const newArr = arr.slice(); // copy array

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }

  return newArr;
}

// console.log("Sorted high temperatures:", sortArray(highTemperatures));
// console.log("Sorted low temperatures:", sortArray(lowTemperatures));

function getMedian(arr) {
  const sorted = sortArray(arr);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
}

console.log("Median high temperature:", getMedian(highTemperatures));
console.log("Median low temperature:", getMedian(lowTemperatures));