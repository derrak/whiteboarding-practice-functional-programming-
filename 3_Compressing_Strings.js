/* Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"
*/


const string = "aaabccdddda"; [aaa,b,cc,dddd,a]

const stringCompressor = function (string) {
  const array = string.match(/(.)\1*/g);  //regex defs: (.) => captures any character 
                                          // \1 referrs to first capture group
                                          // * matches 0 or more 
                                          // g for global
  let outputString = "";
  for (i = 0; i < array.length; i++) {
    if (array[i].length > 1) {
      let letterChunk = array[i].length + array[i].substring(1, 0);
      outputString += letterChunk;
    } 
    else {outputString += array[i]};
  }
  return outputString;
}