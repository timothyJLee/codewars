/*
169. Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

// Moore's Voting Algorithm provides a solution of O(n) time and O(1) space complexity
const majorityElement = function (nums) {
    let majorIndex = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[majorIndex] == nums[i]) count = count + 1;
        else count = count - 1;
        if (count == 0) {
        majorIndex = i;
        count = 1;
        }
    }
    return nums[majorIndex];
};