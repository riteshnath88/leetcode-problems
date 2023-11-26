/**************************************************************************************************
 * Write a function to find the longest common prefix string amongst an array of strings. If there is
 *  no common prefix, return an empty string "". 

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 * ***********************************************************************************************/

// We have to treat it as a 2 dimentinal array. Using 2 for loops, we will constitute the prefix substr

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }

  let prefixStr = "",
    currentChar = "";
  let lengthShortestString = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < lengthShortestString) {
      lengthShortestString = strs[i].length;
    }
  }

  for (let i = 0; i < lengthShortestString; i++) {
    for (let j = 1; j < strs.length; j++) {
      currentChar = strs[j - 1][i];
      if (currentChar == strs[j][i]) {
        continue;
      } else {
        return prefixStr;
      }
    }
    prefixStr = prefixStr + currentChar;
  }
  return prefixStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flow", ""]));
console.log(longestCommonPrefix(["abcd", "abcder", "abcdef"]));
