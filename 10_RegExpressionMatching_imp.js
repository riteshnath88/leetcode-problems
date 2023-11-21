/********************************************************************************************
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

 

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
 ****************************************************************************************/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  /*Top down approach with meomization*/
  function dfs(i, j) {
    // Base conditions of the recursive function
    if (i >= s.length && j >= p.length) {
      return true;
    }

    // i.e. nothing more in pattern to match but in 's' characters are still there then its false.
    // The other way around i.e. s has ended but still characters in p then it can be true also because of *
    if (j >= p.length) {
      return false;
    }

    // If i is within bounds and s[i] == p[j] or p[j] is '.' means it is a match
    let match = i < s.length && (s[i] == p[j] || p[j] == ".");

    // Tackling the condition where next character is pattern is a *
    if (j + 1 < p.length && p[j + 1] == "*") {
      // If the next element is pattern is a *, then the character in 's' can be used 0 or more than 0
      // for 0 usage, we are calling dfs(i, j+2) and for one or more usage, we are calling dfs(i+1, j)
      // because in case of 0 usage, we want to skip the * so advance j by 2. At the same time, we did
      // not match the character at s. So i remain in the same position to see if going ahead there is a
      // match. However if we decide to use *once means we matched the character in s. So we advance i
      // by 1 to point to the next character. At the same time * can be used more than once and we will
      // decide that in the next step. So we keep j fixed.
      return dfs(i, j + 2) || (match && dfs(i + 1, j));
    }

    // If there is a simple match in the characters, we call dfs recursively incrementing i and j
    if (match) {
      return dfs(i + 1, j + 1);
    }

    // If base case is still not evaluated as specified at the top and true is not returned means we could
    // not get a match and therefore false is returned.
    return false;
  }

  // Since we are inside the function isMatch(), we have to call dfs() to initiate the whole process and
  // return the final value. So we initate the process using return dfs(0,0)
  return dfs(0, 0);
};
