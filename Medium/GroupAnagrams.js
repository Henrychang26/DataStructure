// Write a function that takes in an array of strings and groups anagrams together.

//   Anagrams are strings made up of exactly the same letters, where order doesn't
//   matter. For example, "cinema" and "iceman" are
//   anagrams; similarly, "foo" and "ofo" are anagrams.

// Your function should return a list of anagram groups in no particular order.

let words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

//Output [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

//1. sort all strings at each index with alphabetical order
//2. Create a hash table
//3. If non-existent, create hash table and store value
//4. return values

//Time O(w*n*log(n)) Space O(w*n)
// w = number of words
// n =  length of longest word

function groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}
