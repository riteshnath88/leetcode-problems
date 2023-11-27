/********************************************************
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and 
 * nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets. 

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
********************************************************/

/*It is an extension of 2 sum where we first sort the array. Now place left pointer at the begining of the array and right pointer at
the end of the array. If the current sum is less than the expected sum, we advance the left pointer by 1 and if the current sum is 
greater than the expected sum, we decrement the rignt pointer by 1. 

Similarly for threesum, we will sort the array. Then take the 1st element and pointers at 2nd and last position. Then add the 3 elements.
Based on the result (in this case 0), increment or decrement the 1st or last pointer. Then take the 2nd element. Left and right pointers
are set and process is repeated.

[-1, 0, 1, 2, -1, -4] ---sort----> [-4, -1, -1, 0, 1, 2]. Now take -4, left pointer at -1 and right at 2 and continue to find 1st triplet
THen take -1, left at next item which is also -1 and right at 2. 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let resultArr = [];
  const sortedArr = nums.sort((a, b) => a - b);
  for (i = 0; i < sortedArr.length - 2; i++) {
    if (sortedArr[i] > 0) {
      break;
    }
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = sortedArr.length - 1;
    while (left < right) {
      const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        while (left < right && sortedArr[left] === sortedArr[left + 1]) {
          left++;
        }
        while (left < right && sortedArr[right] === sortedArr[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return resultArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
