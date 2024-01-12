/*
70. Climbing Stairs
Hint
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
*/

// finding nth fibonacci number
// Dynamic Programming takes O(n)
// nCr takes at least O(2^n)
// Recursive takes O(2**n)
// order matters so problem is more difficult from simplied solution
const climbStairs = function (n) {
  //    RECURSIVE O(2**n)
  //    if(n == 1) return 1;
  //    if(n == 2) return 2;
  //    return (climbStairs(n-1) + climbStairs(n-2));

  // Dynamic Programming Tabulation Solution O(n) Time O(n) Space
  // let stairs = new Array(1, 1);
  // for (let i = 2; i <= n; i++) {
  //  stairs[i] = stairs[i - 1] + stairs[i - 2];
  //  }
  //  return stairs[n];

  // Space Optimized Dynamic Programming Tabulation Solution O(n) Time O(1) Space
 let [ult, penult, antepenult] = [1,1,1];
  for (let i = 2; i <= n; i++) {
    ult = penult + antepenult;
    antepenult = penult;
    penult = ult;
  }
  return ult;
};

climbStairs(2);
climbStairs(3);
climbStairs(200);