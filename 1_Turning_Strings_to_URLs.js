/* Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.
You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"
Output: "Jasmine%20Ann%20Jones" */

// Ask clarifying questions
// Write down inputs and outputs
// Consider edge cases

// Input: "Jasmine Ann Jones"
// Output: "Jasmine%20Ann%20Jones"

const string2 = "Jasmine Ann Jones";

const spaceReplacer = function (string) {
  const wordArray = string.split(' ');
  const stringSpaceReplaced = wordArray.join('%20');
  console.log(stringSpaceReplaced);
  return stringSpaceReplaced;
}

const string = "Jasmine Ann Jones";

const stringReplacerRecursive = function (string) {
  //Termination case: A conditional that's called if something goes wrong. This prevents an infinite loop.
  if (typeof(string) !== 'string') {
    return "Please enter a string";
  }
  //Base case: The final condition of a successfully called recursive function
 if (string === ""){ 
  return "";
 }
 //Recursion
 else {
  if (string.slice(-1) === " ") {
    //console.log("Space Found!")
    return stringReplacerRecursive(string.substring(0, string.length-1)) + "%20";
  }
  else {
    return stringReplacerRecursive(string.substring(0, string.length-1)) + string.slice(-1);
  }
 }
}