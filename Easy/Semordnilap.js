// Write a function that takes in a list of unique strings and returns a list of
// semordnilap pairs.

// A semordnilap pair is defined as a set of different strings where the reverse
// of one word is the same as the forward version of the other. For example the
// words "diaper" and "repaid" are a semordnilap pair, as are the words
// "palindromes" and "semordnilap".

// The order of the returned pairs and the order of the strings within each pair
// does not matter.

let words = ["diaper", "abc", "test", "cba", "repaid"];
//output [["diaper", "repaid"], ["abc", "cba"]]

//1. sort words array into a set
//2. reverse each index going through original array
//3. check if set includes current reverse string AND it is not the same as word (to avoid cases like aaaa, bbbb)
//4. push into result array and delete from set

//Time O(m * n ) Space O(m * N)
// n is the number of words
// m is the length of longest word

function semordnilap(words) {
  const wordsSet = new Set(words);
  const output = [];

  console.log(wordsSet);

  for (const word of words) {
    const reverse = word.split("").reverse().join("");
    if (wordsSet.has(reverse) && reverse !== word) {
      output.push([word, reverse]);
      wordsSet.delete(word);
      wordsSet.delete(reverse);
    }
  }
  return output;
}

//Solution 2

function semordnilap(words) {
  const hash = {};
  const result = [];
  for (word of words) {
    if (!hash.hasOwnProperty(word)) {
      hash[word] = 1; // if word is not in hash, set to 1
    }
    console.log("before", hash);

    const reversedWord = ReverseString(word);
    if (hash.hasOwnProperty(reversedWord) && hash[reversedWord] === 1) {
      hash[word] = 0;
      if (hash[reversedWord] !== 0) {
        hash[reversedWord] = 0;
        result.push([word, reversedWord]);
      }
      hash[reversedWord] = 0;
    }
  }
  console.log(result);
  return result;
}

function ReverseString(str) {
  return str.split("").reverse().join("");
}
