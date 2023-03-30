//   Write a function that takes in an array of unique integers and returns an
//   array of all permutations of those integers in no particular order.

//   If the input array is empty, the function should return an empty array.

let array = [1, 2, 3];

//[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//

// O(n*n!) time O(n*n!) space

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  //Push new permutation when j reaches end of array by taking a snapshot
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      //[1,2,3] first loop i = j and no changes pushes into permutation
      //[1,3,2] second loop j = 1 i = 2 swap places and pushes into permution
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
      //swals back to original array after first index is done calculating
      //Increment j
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
