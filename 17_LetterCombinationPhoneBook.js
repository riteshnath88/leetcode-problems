/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the 
number could represent. Return the answer in any order. A mapping of digits to letters (just like on the
 telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let finalComb = [];

  function finalCombination(i, currentStr) {
    if (currentStr.length == digits.length) {
      finalComb.push(currentStr);
      return;
    }

    for (char of obj[digits[i]]) {
      finalCombination(i + 1, currentStr + char);
    }

    /*first the for loop will be executed. So fc(1,a), fc(1,b), fc(1,c) will be pushed into the 
    stack. Then fc(1,a) is popped. So i=1 and currentStr = a. Now is condition is not satisfied.
    So in the for, obj[digits[1]] will give 'def'. So char is first char = d. fc(2,ad), fc(2,ae),
    fc(2, af) are pushed into the stack. Then fc(2,ad) popped. Since it fulfills the if, so [ad].
    Then fc(2,ae) popped and fc(2,af) popped. -> [ad, ae, af]. Then fc(1,b) is popped. So now i=1
    and currentStr = b. Comming to the for, fc(2,bd), fc(2,be), fc(2, bf) are pushed and so on.*/
  }
  if (digits) finalCombination(0, "");
  return finalComb;
};
Console;
