// ----- ----- -----
// |     |     |     |
// |  1  |  2  |  3  |
// |     | abc | def |
//  ----- ----- -----
// |     |     |     |
// |  4  |  5  |  6  |
// | ghi | jkl | mno |
//  ----- ----- -----
// |     |     |     |
// |  7  |  8  |  9  |
// | pqrs| tuv | wxyz|
//  ----- ----- -----
//       |     |
//       |  0  |
//       |     |
//        -----

//   Almost every digit is associated with some letters in the alphabet; this
//   allows certain phone numbers to spell out actual words. For example, the phone
//   number 8464747328 can be written as timisgreat;
//   similarly, the phone number 2686463 can be written as
//   antoine or as ant6463.

//   It's important to note that a phone number doesn't represent a single sequence
//   of letters, but rather multiple combinations of letters. For instance, the
//   digit 2 can represent three different letters (a, b, and c).

// A mnemonic is defined as a pattern of letters, ideas, or associations that
// assist in remembering something. Companies oftentimes use a mnemonic for their
// phone number to make it easier to remember.

// Given a stringified phone number of any non-zero length, write a function that
// returns all mnemonics for this phone number, in any order.

//   For this problem, a valid mnemonic may only contain letters and the digits
//   0 and 1. In other words, if a digit is able to be
//   represented by a letter, then it must be. Digits 0 and
//   1 are the only two digits that don't have letter representations
//   on the keypad.

// Note that you should rely on the keypad illustrated above for digit-letter
// associations.

let phoneNumber = "1905";

// [
//     "1w0j",
//     "1w0k",
//     "1w0l",
//     "1x0j",
//     "1x0k",
//     "1x0l",
//     "1y0j",
//     "1y0k",
//     "1y0l",
//     "1z0j",
//     "1z0k",
//     "1z0l",
//   ]

//1. Create datastructure to map values into each number
//2. recurvsively call into each index of given phoneNumber.
//3. find all possible solution
//4. last index will get resolved first then go back wards until all permutations found.

function phoneNumberMnemonics(
  phoneNumber,
  mnemonic = "",
  mnemonics = [],
  index = 0
) {
  if (index > phoneNumber.length - 1) {
    mnemonics.push(mnemonic);
    return mnemonics;
  }
  for (let char of LOOKUP[phoneNumber[index]]) {
    phoneNumberMnemonics(phoneNumber, mnemonic + char, mnemonics, index + 1);
  }

  return mnemonics;
}

const LOOKUP = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
