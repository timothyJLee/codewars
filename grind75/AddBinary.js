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
    [result, leading, carry] = [
        "",
        Math.max(a.length, b.length),
        0
    ];
    a = a.padStart(leading, 0);
    b = b.padStart(leading, 0);

    console.log("a and b " + a + " " + b);

    for(let i = leading - 1; i >= 0; i--){
        result[i] = a[i] ^ b[i];
        let temp = a[i] ^ b[i];
        console.log("+a[i] and +b[i] " + a[i] + " " + b[i]);
        console.log("result[i] " + result[i] + " " + temp);
        if(!(result[i])){ 
            result[i] = (result[i] ^ carry).toString(); // if result is zero carry can be added
            carry = a[i] && b[i];
        } else {
            if(carry){ // if result and carry are 1
                result[i] = (result[i] ^ carry).toString();
                carry = 1;
            }
        }
        return result;
    }
};

addBinary("0101011101010", "1101")