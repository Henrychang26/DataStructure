// Write a function that takes in a non-empty list of non-empty strings and
// returns a list of characters that are common to all strings in the list,
// ignoring multiplicity.

// Note that the strings are not guaranteed to only contain alphanumeric characters. The list
// you return can be in any order.

let strings = ["abc", "bcd", "cbaccd"];
//Output = ["b","c"]

//1. keep track of each letter in key value pair
//2. loop through the values of each letter
//3. if length greater than strings.length, push into result

//Time O(n * m ) Space O(m)
//n = number of strings
//m = length of longest string
function commonCharacters(strings) {
  const counts = {};
  for (const string of strings) {
    const uniqueStringChar = new Set(string);
    for (const char of uniqueStringChar) {
      if (!(char in counts)) {
        counts[char] = 0;
      }
      counts[char]++;
    }
  }
  const finalCharacters = [];
  for (const [character, count] of Object.entries(counts)) {
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }
  return finalCharacters;
}
