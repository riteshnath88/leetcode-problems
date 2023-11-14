/*******************************************************************************************************
 * Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*******************************************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Have 2 pointer L and R at position 0. Define a object, maxlength and currentlen
  // If value at pointer R is not available at object, add it as key and the index position as value.
  // Increase curlen by 1. If curlen > maxLen, replace maxlen by curlen
  // If the value exists in the obj: If right pointer is pointing to 'b' and index value of b as stored in
  // temp array is 2 and poistion of left pointer is 0 or 1 i.e. less than the index value in temp, we
  // need to move the left pointer to +1 position of the index value stored in temp for the element.
  // else only add the value and move the right pointer and update the value of index in temp. No need
  // to  move the left pointer

  let left = 0,
    right = 0,
    curLen = 0,
    maxLen = 0;
  let temp = new Map();
  while (right < s.length) {
    if (!temp.has(s[right])) {
      // console.log("Inside If");
      temp.set(s[right], right);
      curLen = right - left + 1;

      if (curLen > maxLen) {
        maxLen = curLen;
      }

      right += 1;
    } else {
      if (temp.get(s[right]) < left) {
        // console.log("Inside second if");
        temp.set(s[right], right);
        curLen = right - left + 1;

        if (curLen > maxLen) {
          maxLen = curLen;
        }

        right += 1;
      } else {
        // console.log("Inside second else");
        left = temp.get(s[right]) + 1;
        temp.set(s[right], right);
        curLen = right - left + 1;

        if (curLen > maxLen) {
          maxLen = curLen;
        }

        right += 1;
      }
    }
    // console.log(
    //   `Temp: ${[
    //     ...temp,
    //   ]} Left: ${left} Right: ${right} Curlen: ${curLen} Maxlen: ${maxLen} `
    // );
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abba"));
