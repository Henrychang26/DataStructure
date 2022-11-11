//   Write a function that takes in a non-empty string and that returns a boolean
//   representing whether the string is a palindrome.

//   A palindrome is defined as a string that's written the same forward and
//   backward. Note that single-character strings are palindromes.

// sudo :
// string.length % 2 !== 0;
//  i         ^
//     "a b c d c b a" .  =string.length=7
//  "d c b a" ->
//output = true

let string = "abcdefghihgfeddcba";
function isPalindrome(string) {
  //   // let j =

  //   // for(let i=Math.floor(string.length/2); i <)

  //abcdefghihgfeddcba
  let result;
  for (let i = 0; i < string.length; i++) {
    if ((string[i] = string[string.length - 1 - i])) {
      result = true;
    }
    if (string[i] != string[string.length - 1 - i]) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(string[4]);
console.log(string[13]);

console.log(isPalindrome(string));
// console.log(string.charAt(0));
// console.log(string[0]);
// let n = 0;

// while (n < 3) {
//     n++;
//   }

//   console.log(n);
// expected output: 3
function isPalindrome(string) {
  //   let i = Math.floor(string.length);
  let i = 0;
  let result = false;
  while (i < string.length) {
    let end = string.length - 1 - i;
    if (string.charAt(i) === string.charAt(string.charAt(end))) {
      i++;
      result = true;
    }
    result = false;
    return result;
  }
}
// console.log(string.charAt(1));
console.log(isPalindrome(string));
