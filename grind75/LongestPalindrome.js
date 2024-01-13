/*
409. Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

const longestPalindrome = function (s) {
    let hm = {};
    let longest = 0;
    let largestOdd = 0;

    for(let i = 0; i < s.length; i++){
        hm[s[i]] = hm[s[i]] == undefined ? 1 : hm[s[i]] + 1;
    }

    for(const numChar in hm){
        if (hm[numChar] % 2 == 0) {
            longest += hm[numChar];
        } else if (hm[numChar] > largestOdd) {
            if (largestOdd > 0) {longest += largestOdd - 1; }
            largestOdd = hm[numChar];
        }
        else{
            longest += hm[numChar] - 1;
        }
    }

    return longest + largestOdd;
};