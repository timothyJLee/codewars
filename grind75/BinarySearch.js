/*
704. Binary Search
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

function binarySearch(nums, target) { //iterative

    let [min, max] = [0, nums.length - 1];

    while (!(min > max)) {
      let avg = Math.floor((max + min) / 2);
      if (target < nums[avg]) {
        max = avg - 1;
      } else if (target > nums[avg]) {
        min = avg + 1;
      } else if (target == nums[avg]) {
        return avg;
      }
    }
    return -1;
}

function binarySearchRecursive(nums, target) {
  let [min, max] = [0, nums.length - 1];
  let avg = Math.floor((max + min) / 2);

  (function binSearch(min, max) {  // recursive named function as IIFE
    if (min > max) {
      avg = -1;
      return;
    }
    avg = Math.floor((max + min) / 2);
    if (target < nums[avg]) {
      binSearch(min, avg - 1);
    } else if (target > nums[avg]) {
      binSearch(avg + 1, max);
    } else if (target == nums[avg]) {
      return;
    }
  })(0, nums.length - 1);

  return avg;
}