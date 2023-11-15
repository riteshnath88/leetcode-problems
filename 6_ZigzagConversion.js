/****************************************************************************************************
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows); 

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
 * *************************************************************************************************/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length == 1 || numRows < 2) return s;
  //Create an 2D array
  let arr = [];
  let flag = "down";
  let currentRow = 0;
  let currentCol = 0;
  let finalString = "";
  for (let i = 0; i < numRows; i++) {
    let newArr = [];
    arr.push(newArr);
  }

  for (let i = 0; i < s.length; i++) {
    while (flag == "down") {
      arr[currentRow][currentCol] = s[i];
      currentRow++;
      i++;
      if (currentRow == numRows) {
        flag = "up";
        currentRow--; // It will bring the row to the earlier position i.e. the last row. Because we increased it by 1,
        //prior to this reducing, it was pointing to one more than no of rows
      }
    }
    currentCol++;
    currentRow--;
    while (flag == "up") {
      arr[currentRow][currentCol] = s[i];
      i++;
      currentCol++;
      currentRow--;
      if (currentRow < 0) {
        flag = "down";
        currentRow += 2;
        currentCol--;
        i--;
      }
    }
    //currentCol++;
  }
  for (let i = 0; i < numRows; i++) {
    finalString = finalString + arr[i].join("");
  }
  return finalString;
};
