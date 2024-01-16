/*
67. Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

// quick to code, conver to to decimal(BigInt), add, and then convert back to binary
// Manual coding, adding leading zeros, add each digit taking into account carry
const addBinary = function (a, b) {
    let [result, leading, carry] = [
        [],
        Math.max(a.length, b.length),
        0
    ];
    a = a.padStart(leading, 0);
    b = b.padStart(leading, 0);

    for(let i = leading - 1; i >= 0; i--){
        result[i] = a[i] ^ b[i];
        if(!(result[i])){ 
            result[i] = (result[i] ^ carry); // if result is zero carry can be added
            carry = a[i] && b[i];
        } else {
            if(carry == 1){ // if result and carry are 1
                result[i] = (result[i] ^ carry);
                carry = 1;
            }
        }
    }
    return (carry == 1) ? result.join("").padStart(leading+1, 1) : result.join("");
};