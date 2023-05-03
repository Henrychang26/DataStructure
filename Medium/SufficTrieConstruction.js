// Write a SuffixTrie< class for a Suffix-Trie-like data structure.
// The class should have a root property set to be the root node of
// the trie and should support:

// Creating the trie from a string; this will be done by calling the
// populateSuffixTrieFrom method upon class instantiation, which
// should populate the root of the class.

// Searching for strings in the trie.

// Note that every string added to the trie should end with the special
// endSymbol character: "*".

// If you're unfamiliar with Suffix Tries, we recommend watching the
// Conceptual Overview section of this question's video explanation before
// starting to code.

let string = "babc";

//
// {
//     "c": {"*": true},
//     "b": {
//       "c": {"*": true},
//       "a": {"b": {"c": {"*": true}}},
//     },
//     "a": {"b": {"c": {"*": true}}},
//   }

//1. String essentially has to be nested for loop twice to find all combos
//2. start from initial root node, if it doesnt exist, create new hash table to point to next letter
//3. Continue to end of string then move i index
//4. when reached end of j index convert endSymbol to true.
//4. Searching is in similar logic

//Time O(n^2) Space O(N^2)
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) {
        return false;
      } else {
        node = node[letter];
      }
    }
    return this.endSymbol in node;
  }
}
