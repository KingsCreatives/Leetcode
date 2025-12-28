/*
You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length,
    cols = matrix[0].length,
    left = 0,
    right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2),
      midVal = matrix[Math.floor(mid / cols)][mid % cols];

    if (midVal === target) {
      return true;
    } else if (midVal > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};