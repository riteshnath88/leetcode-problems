/******************************************************************************************
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored
 *  in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the
 *  sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number
 *  0 itself.
 * 2 -> 4 -> 3 [2,4,3]
 * 5 -> 6 -> 4 [5,6,4]
 * 7 -> 0 -> 8 [7,0,8]
 * -------------------
 * [0]
 * [0]
 * [0]
 * -------------------
 * [9,9,9,9,9,9,9]
 * [9,9,9,9]
 * [8,9,9,9,0,0,0,1]
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sumList = new ListNode();
  let l3 = sumList;
  let sum = 0,
    carry = 0,
    val = 0;
  // Continue the loop until there is element in either of the linked list
  while (l1 || l2) {
    if (l1 != null && l2 != null) {
      sum = l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 == null) {
      sum = l2.val + carry;
      l2 = l2.next;
    } else if (l2 == null) {
      sum = l1.val + carry;
      l1 = l1.next;
    }

    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      val = sum % 10;
    } else {
      val = sum;
      carry = 0;
    }

    let newListNode = new ListNode(val);
    l3.next = newListNode;
    l3 = l3.next;
  }

  // For the case [9,9,9,9,9,9,9] and [9,9,9,9], the while loop ends but the last carry of 1 has to be added as follows.

  if (carry > 0) {
    let newListNode = new ListNode(carry);
    l3.next = newListNode;
    l3 = l3.next;
  }

  return sumList.next;
};
