/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function isAnagram(s, t) {    
    //hash table
    let hm = {};  

    for (let i = 0; i<s.length; i++){
        hm[s[i]] = hm[s[i]] == undefined ? 1 : hm[s[i]] + 1;
    }

    for(let i = 0; i < t.length; i++){
        if(!hm[t[i]]){
            return false;
        }else if (hm[t[i]] == 0) {
          return false;
        } else{
          hm[t[i]]--;
        }
    }

    if(Object.values(hm).every((cnt) => cnt == 0))
    return true;
    else
    return false;
}