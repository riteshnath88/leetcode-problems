/**************************************************************************************************
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
****************************************************************************************************/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let val = num;
  let inRoman = "";
  let quotient;
  let tempValue;

  //Dealing with the boundary cases:

  switch (true) {
    case num == 4:
      return "IV";
    case num == 9:
      return "IX";
    case num == 40:
      return "XL";
    case num == 90:
      return "XC";
    case num == 400:
      return "CD";
    case num == 900:
      return "CM";
    default:
      break;
  }

  //Conversiion logic for int to roman - instead of writing the same code in each of the block, we should create a function for it.
  while (val != 0) {
    switch (true) {
      case val >= 1000:
        quotient = Math.floor(val / 1000);
        tempValue = "M".repeat(quotient);
        inRoman = inRoman + tempValue;
        val = val % 1000;
        break;

      case val >= 500 && val < 1000:
        if (val >= 900) {
          inRoman = inRoman + "CM";
          val = val - 900;
          break;
        }
        quotient = Math.floor(val / 500);
        tempValue = "D".repeat(quotient);
        inRoman = inRoman + tempValue;
        val = val % 500;
        break;

      case val >= 100 && val < 500:
        if (val >= 400) {
          inRoman = inRoman + "CD";
          val = val - 400;
          break;
        }
        quotient = Math.floor(val / 100);
        tempValue = "C".repeat(quotient);
        inRoman = inRoman + tempValue;
        val = val % 100;
        break;

      case val >= 50 && val < 100:
        if (val >= 90) {
          inRoman = inRoman + "XC";
          val = val - 90;
          break;
        }
        quotient = Math.floor(val / 50);
        tempValue = "L".repeat(quotient);
        inRoman = inRoman + tempValue;
        val = val % 50;
        break;

      case val >= 10 && val < 50:
        if (val >= 40) {
          inRoman = inRoman + "XL";
          val = val - 40;
          break;
        }
        quotient = Math.floor(val / 10);
        tempValue = "X".repeat(quotient);
        inRoman = inRoman + tempValue;
        val = val % 10;
        break;

      case val >= 5 && val < 10:
        if (val >= 9) {
          inRoman = inRoman + "IX";
          val = val - 9;
          break;
        }
        quotient = Math.floor(val / 5);
        tempValue = "V".repeat(quotient);
        inRoman = inRoman + tempValue;
        val = val % 5;
        break;

      case val >= 1 && val < 5:
        if (val >= 4) {
          inRoman = inRoman + "IV";
          val = val - 4;
          break;
        }
        tempValue = "I".repeat(val);
        inRoman = inRoman + tempValue;
        val = 0;
        break;
    }
    //console.log(inRoman);
  }
  return inRoman;
};
