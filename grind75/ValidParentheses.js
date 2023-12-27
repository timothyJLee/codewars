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

const inputs = ["()", "()[]{}", "(]"];
const parentheses = {
  "(": ")",
  "[": "]",
  "{": "}",
};

for(let i = 0; i<inputs.length; i++){
    isValid(inputs[i]);
}

function isValid(s) {
  let stack = []; // Create stack array

 s.split(" ").forEach((char) => {
   // if(Object.keys(parentheses).includes(char)){}
   if (parentheses[char] !== undefined) {
    stack.push(char);
   } else if (Object.values(parentheses).includes(char)/*closing parentheses*/){
    if(stack.length = 0/*stack empty*/) { return false; }
    if (!Object.values(parentheses).includes(stack.pop()) /*no match*/) { return false; }
   } else /*non parentheses*/ {
    return false;
   }
 });
 console.log(true);
 return true;
}