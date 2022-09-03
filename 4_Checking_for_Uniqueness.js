/*
Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true
*/


const string1 = "hello";
const string2 = "copyright";

const uniquenessChecker = function (string) {

  for ( i = 0 ; i < string.length; i++) {
    for ( j = i+1 ; j < string.length; j++){
      if (string.charAt(i) === string.charAt(j)) {
        // console.log(string.charAt(i) + " " + string.charAt(j) );
        return false;
      }
    }
  }
  return true;
}

