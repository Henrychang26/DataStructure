// You're given two strings stringOne and stringTwo.
// Write a function that determines if these two strings can be made equal
// using only one edit.

// Replace: One character in one string is swapped for a different
//   character.

// Add: One character is added at any index in one string.

// Remove: One character is removed at any index in one string.

// Note that both strings will contain at least one character. If the strings
// are the same, your function should return true.

let stringOne = "hello";
let stringTwo = "hllo";

//Output true
//Solution 1

function oneEdit(stringOne, stringTwo) {
  if (Math.abs(stringOne.length - stringTwo.length) > 1) {
    return false;
  }

  if (stringOne.length === stringTwo.length) {
    let edit = 0;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) edit++;
      if (edit === 2) return false;
    }
  }

  if (stringOne.length > stringTwo.length) {
    let edit = 0;
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i - edit]) {
        edit++;
      }
      if (edit > 1) return false;
    }
  }

  if (stringOne.length < stringTwo.length) {
    let edit = 0;
    for (let i = 0; i < stringTwo.length; i++) {
      if (stringOne[i - edit] !== stringTwo[i]) {
        edit++;
      }
      if (edit > 1) return false;
    }
  }

  return true;
}

// function oneEditReplace(stringOne, stringTwo) {
//   let foundDifference = false;
//   for (let i = 0; i < stringOne.length; i++) {
//     if (stringOne[i] !== stringTwo[i]) {
//       if (foundDifference) {
//         return false;
//       }
//       foundDifference = true;
//     }
//   }
//   return true;
// }

// function oneEditInsert(stringOne, stringTwo) {
//   let indexOne = 0;
//   let indexTwo = 0;
//   while (indexTwo < stringTwo.length && indexOne < stringOne.length) {
//     if (stringOne[indexOne] !== stringTwo[indexTwo]) {
//       if (indexOne !== indexTwo) {
//         return false;
//       }
//       indexTwo++;
//     } else {
//       indexOne++;
//       indexTwo++;
//     }
//   }
//   return true;
// }

// let indexOne = 0;
// let indexTwo = 0;
// let edit = 0;
// while (
//   indexOne < stringOne.length &&
//   indexTwo < stringTwo.length &&
//   edit <= 1
// ) {
//   if (stringOne[indexOne] !== stringTwo[indexTwo]) {
//     if (indexOne !== indexTwo) {
//       edit++;
//       indexTwo++;
//     }
//   }
// }

// "hellel"
// "hello"

//1. if lengths are equal compare each index
//2. length difference cannot be more than 1
//3. Keep track of how many edits
//4. The longer string moves forward for comparison
//Note: Add and remove are inverse of each other(only need to check one side)
//Easier to do with longer string since shorter string reaches beyond end of string(undefined).

//Optimal solution
//Time O(n) Space O(1)
function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;

  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  let madeEdit = false;
  let indexOne = 0;
  let indexTwo = 0;

  while (indexOne < lengthOne && indexTwo < lengthTwo) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      if (madeEdit) return false;
      madeEdit = true;

      if (lengthOne > lengthTwo) {
        indexOne++;
      } else if (lengthTwo > lengthOne) {
        indexTwo++;
      } else {
        indexOne++;
        indexTwo++;
      }
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
}
