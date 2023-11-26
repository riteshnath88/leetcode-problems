/******************************************************************************************
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * ******************************************************************************/

var intToRoman = function (num) {
  let arr = s.split("");
  let intValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "I" && arr[i + 1] == "V") {
      intValue += 4;
      i++;
      continue;
    }
    if (arr[i] == "I" && arr[i + 1] == "X") {
      intValue += 9;
      i++;
      continue;
    }
    if (arr[i] == "X" && arr[i + 1] == "L") {
      intValue += 40;
      i++;
      continue;
    }
    if (arr[i] == "X" && arr[i + 1] == "C") {
      intValue += 90;
      i++;
      continue;
    }
    if (arr[i] == "C" && arr[i + 1] == "D") {
      intValue += 400;
      i++;
      continue;
    }
    if (arr[i] == "C" && arr[i + 1] == "M") {
      intValue += 900;
      i++;
      continue;
    }
    if (arr[i] == "M") {
      intValue += 1000;
      continue;
    }
    if (arr[i] == "D") {
      intValue += 500;
      continue;
    }
    if (arr[i] == "C") {
      intValue += 100;
      continue;
    }
    if (arr[i] == "L") {
      intValue += 50;
      continue;
    }
    if (arr[i] == "X") {
      intValue += 10;
      continue;
    }
    if (arr[i] == "V") {
      intValue += 5;
      continue;
    }
    if (arr[i] == "I") {
      intValue += 1;
      continue;
    }
  }
  return intValue;
};
