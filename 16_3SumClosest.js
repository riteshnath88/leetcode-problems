/***************************************************************************************************
 * Given an integer array nums of length n and an integer target, find three integers in nums such that
 *  the sum is closest to target. Return the sum of the three integers. You may assume that each input 
 * would have exactly one solution. 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
***************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];

      // Initially result is sum of 1st 3 element. So if the current sum of (3 elements - target) is less
      // than target - result then wee replace the result with the current sum.
      if (Math.abs(target - currentSum) < Math.abs(target - result)) {
        result = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSumClosest([1, 1, 1, 0], -100));
