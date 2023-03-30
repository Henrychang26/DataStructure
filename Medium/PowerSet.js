// Write a function that takes in an array of unique integers and returns its
// powerset.

//   The powerset P(X) of a set X is the set of all
//   subsets of X. For example, the powerset of [1,2] is
//   [[], [1], [2], [1,2]]

// Note that the sets in the powerset do not need to be in any particular order.

let array = [1, 2, 3];

//[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

//1. start with an empty array with initial value [[]]
//2. loop through each index of original array
//3. value of each index then loop through output array then add.

// function powerset(array) {
//   let output = [[]];

//   for (let i = 0; i < array.length; i++) {
//     let currentLength = output.length;
//     for (let j = 0; j < currentLength; j++) {
//       let subset = [array[i], output[j]];
//       output.push(subset);
//     }
//   }
//   return output;
// }

//Solution
//Time O(n*2^n) Space O(n*2^n)
function powerset(array) {
  const subsets = [[]];
  for (const ele of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
}

powerset(array);
