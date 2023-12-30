/*
125. Valid Palindrome
Easy
8.7K
8.1K
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

function isPalindrome(s) {
  const stringProccessed = (s) => {
    let processedString = s
      .replace(/[^A-Za-z]/g, "") //regex replace non word with nothing
      .toLowerCase() //all letters to lowercase
      .replaceAll(" ", ""); //replace all spaces with nothing
    return processedString; //return string
  };
  const string = stringProccessed(s);
  for (let i = 0; i < string.length / 2; i++) {
    if (!(string[i] == string[(string.length - 1) - i])) {
      return false;
    }
  }
  return true;
}