/******************************************************************************************************
 * Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 * ***************************************************************************************************/

function expandFromCentre(str, left, right) {
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  //Once the while loop fails means current left and right don't confer to the palindrome rule. So we will return the str where
  // L is 1 unit greater i.e. L+1 and right is one unit small i.e. R-1 which will reinstate the earlier state. Also in slice,
  // if R=3, then value up to 2 is returned. So do R-1 + 1 which is effectively 1.
  return str.slice(left + 1, right + 1 - 1);
}

var longestPalindrome = function (s) {
  if (s == null || s.length < 1) return "";

  let start = 0;
  let end = 0;
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCentre(s, i, i); // In case of odd palindrome, both the pointers will point to the same centre
    let evenPalindrome = expandFromCentre(s, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
