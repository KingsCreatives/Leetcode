/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.


Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

 

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sCount = {};
  const tCount = {};

  for (let char of s) {
    sCount[char] = (sCount[char] || 0) + 1;
  }

  for (let char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }

  for (let char in sCount) {
    if (sCount[char] !== tCount[char]) {
      return false;
    }
  }
  return true;
};