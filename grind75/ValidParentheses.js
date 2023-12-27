/*

**********IN PROGRESS**********
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

SOLUTION:
- create stack data structure FILO(First In Last Out)
- push open parentheses to stack until closed parentheses is encountered.
- pop last item off of stack see if it is corresponding open parentheses
-  return false if not a match
- keep on until stack is empty
- return true
*/

const parentheses = {
  "(": ")",
  "[": "]",
  "{": "}",
};
function validParentheses(string) {
  let stack = []; // Create stack array

 string.forEach((char) => {
   // if(Object.keys(parentheses).filter((key) => key === char)){}
   if (parentheses[char] !== undefined) {
    stack.push(char);
   } else if (true/*closing parentheses*/){

   } else if (true/*no parentheses*/){

   }
 });
}