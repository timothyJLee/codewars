/*
383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

const canConstruct = function (ransomNote, magazine) {

  if (ransomNote == undefined || magazine == undefined) return false;


  // Make counting hashmap of magazine string
    let hm = {};
  for(let i = 0; i < magazine.length; i++){
    hm[magazine[i]] = hm[magazine[i]] == undefined ? 1 : hm[magazine[i]] + 1;
  }
console.log(hm);
  // loop through ransomNote
  // if not hashmap index match, return false
  // When ransomNote matches index in hashmap, check if count is > 0
  // minus one, else return false
  // if loop finishes, return true
  for (let i = 0; i < ransomNote.length; i++) {
    if (hm[ransomNote[i]] == undefined) return false;
    else if (hm[ransomNote[i]] == 0) return false;
    else hm[ransomNote[i]] = hm[ransomNote[i]] - 1;
  }

  return true;
};

canConstruct("hello", "Hellooo");