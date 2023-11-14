/**************************************************************************************************
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two 
 * sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
**************************************************************************************************/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let pointer1 = 0,
    pointer2 = 0;
  let temp = [];
  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] < nums2[pointer2]) {
      temp.push(nums1[pointer1]);
      pointer1 += 1;
    } else {
      temp.push(nums2[pointer2]);
      pointer2 += 1;
    }
  }

  while (pointer1 < nums1.length) {
    temp.push(nums1[pointer1]);
    pointer1 += 1;
  }

  while (pointer2 < nums2.length) {
    temp.push(nums2[pointer2]);
    pointer2 += 1;
  }
  if (temp.length % 2 == 0) {
    // even sized array
    return (temp[temp.length / 2] + temp[temp.length / 2 - 1]) / 2;
  } else {
    // odd sized array
    return temp[Math.floor(temp.length / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
