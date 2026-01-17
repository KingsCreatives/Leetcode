/**
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:

Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]

 

Constraints:

    The number of nodes in the list is in the range [0, 100].
    0 <= Node.val <= 100
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 
 * @param {*} head 
 * The Pointer Dance:

    prev.next = node2

    node1.next = node2.next

    node2.next = node1

Advance: Move prev to node1 (which is now the second node in the pair) to prepare for the next swap.
 */

var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;

  while (prev.next && prev.next.next) {
    let node1 = prev.next;
    let node2 = prev.next.next;

    prev.next = node2;
    node1.next = node2.next;
    node2.next = node1;

    prev = node1;
  }
  return dummy.next;
};
