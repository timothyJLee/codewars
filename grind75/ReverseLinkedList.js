/*
206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

// Iterative method take up O(1) space comapred to other methods that take O(n) space
const reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const reverseListRecursive = function(head) {
    if(head == null || head.next == null) return head;
    let next = reverseListRecursive(head.next); // call on rest of list
    head.next.next = head; // set the next link of new head to point to the reversed first
    head.next = null;  // set the old head node(at the end of the list now) to null ready to be set if needed
    return next;
};

const reverseListES6 = function(head){
    let [prev, curr, next] = [null, head, null];
    while (curr !== null) {
      [prev, curr, next] = [curr, next, current.next];
    }
    return prev;
};

const reverseListRecursiveES6 = function (head) {
    if (head == null || head.next == null) return head;
    [next, head.next.next, head.next] = [
    reverseListRecursive(head.next),
    head,
    null,
    ];
    return next;
};