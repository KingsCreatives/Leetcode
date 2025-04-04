/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
 */

var searchRange = function (nums, target) {
  // Helper function to find the first occurrence
  function findFirst(nums, target) {
    let left = 0,
      right = nums.length - 1,
      first = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        first = mid; // Store the potential first occurrence
        right = mid - 1; // Move left to find an earlier occurrence
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return first;
  }

  // Helper function to find the last occurrence
  function findLast(nums, target) {
    let left = 0,
      right = nums.length - 1,
      last = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        last = mid; // Store the potential last occurrence
        left = mid + 1; // Move right to find a later occurrence
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return last;
  }

  // Find the first and last occurrence
  let first = findFirst(nums, target);
  let last = findLast(nums, target);

  return [first, last];
};

// };
// console.log(findFirst([], 0));// [-1,-1]
// console.log(findFirst([5, 7, 7, 8, 8, 10], 8));// [3,4]
console.log(findFirst([5, 7, 7, 8, 8, 10], 6));// [-1,-1]
