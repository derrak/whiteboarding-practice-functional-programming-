/* Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi" 7, 53]

Output: [7, 9, "hi", 12, 53]
*/

//const array = [7, 9, "hi", 12, "hi", 7, 53];

const duplicateChecker = function (array) {
  const inputArray = array;
  let outputArray = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    let count = 0;
    console.log("Checking: " + inputArray[i]);
    for (let j = i; j >= 0; j--) {
      if (inputArray[i] === inputArray[j]) {
        count++;
        console.log(inputArray[i]+" count "+count);
      } 
    }
      if (count < 2) {
        outputArray.unshift(inputArray[i]);
        console.log("adding " + inputArray[i] + " to outputArray: " + outputArray);
      }
  }
  return outputArray;
}

const array = [7, 9, "hi", 12, "hi", 7, 53];

const duplicateCheckerFilter = function (array) {
  const arrayUnique = array.unique();
  return arrayUnique;
}