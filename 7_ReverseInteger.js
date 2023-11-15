/***************************************************************************************************
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
 * to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment
 *  does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 * ************************************************************************************************/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    x = x * -1;
    x = x.toString();
    let tempArray = x.split("");
    val = Number(tempArray.reverse().join("")) * -1;
    if (val < (-2) ** 31) {
      return 0;
    } else {
      return val;
    }
  } else {
    x = x.toString();
    let tempArray = x.split("");
    val = Number(tempArray.reverse().join(""));
    if (val > 2 ** 31 - 1) {
      return 0;
    } else {
      return val;
    }
  }
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(-120));
