// Write a function that takes in an array of words and returns the smallest
// array of characters needed to form all of the words. The characters don't need
// to be in any particular order.

//   For example, the characters ["y", "r", "o", "u"] are needed to
//   form the words ["your", "you", "or", "yo"].

// Note: the input words won't contain any spaces; however, they might contain
// punctuation and/or special characters.

let words = ["this", "that", "did", "deed", "them!", "a"];

//Output ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]

// The characters and charsHash arrays are initialized. characters will hold
// the characters that are required to form the input words, and charsHash will
// hold the count of each character in all the input words.

// The code then iterates over each word in the input array using a for..of loop.
//For each word, a new object called tempCharsHash is created to hold the count of each character in that word.

// Next, the code iterates over each character in the current word using another for..of loop.
//For each character, the getCharCount function is called to increment the count of that character in the tempCharsHash object.

// The code then checks if the current character is already present in the charsHash object.
//If it is not, or if the count of the current character in the tempCharsHash object is greater
// than the count of the same character in the charsHash object, then the count of the current character is
//updated in the charsHash object and the character is added to the characters array.

// Finally, the function returns the characters array.

//Time O(n * l) Space O(c)
//n = is number of words
//l = length of longest word
//c = number of unique characters
function minimumCharactersForWords(words) {
  const characters = [];
  const charsHash = {};

  for (word of words) {
    const tempCharsHash = {};
    for (char of word) {
      tempCharsHash[char] = getCharCount(char, tempCharsHash);
      if (!(char in charsHash) || tempCharsHash[char] > charsHash[char]) {
        charsHash[char] = getCharCount(char, charsHash);
        characters.push(char);
      }
    }
  }
  return characters;
}

function getCharCount(character, charMap) {
  return character in charMap ? ++charMap[character] : 1;
}
