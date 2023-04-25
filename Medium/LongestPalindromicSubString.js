//   Write a function that, given a string, returns its longest palindromic
//   substring.

//   A palindrome is defined as a string that's written the same forward and
//   backward. Note that single-character strings are palindromes.
// You can assume that there will only be one longest palindromic substring.

let string = "abaxyzzyxf";

//Output = "xyzzyx"

//Longest substring can be checked by using each index as the center point(mirror method)
//Longest substring can be even or odd
//2 cases to check and continue to end of for loop
//Time O(n^2) Space O(n)

function longestPalindromicSubstring(string) {
  let [start, maxLength] = [0, 1]; //start is used to store the initial character of a palindrome in answer and maxLength is length from the start of the palindrome answer
  for (let i = 0; i < string.length; i++) {
    //even case
    //In even case we just need to compare current character with its previous chgaracter

    let left = i - 1;
    let right = i;
    while (
      left >= 0 &&
      right <= string.length - 1 &&
      string[left] == string[right]
    ) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }

    //Odd case
    //for every char of string, we check its left and right and if they are equal we expand it by decreasing its left and increasing its right

    left = i - 1;
    right = i + 1;
    while (
      left >= 0 &&
      right <= string.length - 1 &&
      string[left] == string[right]
    ) {
      if (right - left + 1 > maxLength) {
        //if its a palindrome, its length is calculated by substracting it with right character to its starting charactera and we add 1 bcz we did zero based indexing
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  return string.substr(start, maxLength);
}
