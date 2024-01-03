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
      console.log("min: " + min + "  max: " + max + "  avg " + avg);
      console.log("nums[avg]: " + nums[avg] + "  target: " + target);
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

function binarySearchRecursive(nums, target){ //recursive
    let [min, max] = [0, nums.length - 1];
}

binarySearch([0,1,2,3,4,5,6,16,19,20,24,25,26,80,30], 6);