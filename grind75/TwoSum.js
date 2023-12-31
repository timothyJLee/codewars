/*
  1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
  */

// hash table implementation for constant lookup providing for O(n) time complexity
function twoSum(nums, target) {
  let hashMap = {};  // Create hash table object

  for (let i = 0; i < nums.length; i++) {      // iterate through nums array
    let complement = target - nums[i];             // complement to search for in hashtable
    if (hashMap[complement] !== undefined) {   // if complement exists in hashtable
      return [hashMap[complement], i];         // returnn indices of nums array that show a pair   
    }
      hashMap[nums[i]] = i;    // otherwise add complement to hashmap as key to the value that is the array index
  }
    return "err";   // return error if no pairs found
}
