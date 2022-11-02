//   Write a function that takes in a sorted array of integers as well as a target
//   integer. The function should use the Binary Search algorithm to determine if
//   the target integer is contained in the array and should return its index if it
//   is, otherwise -1

//   If you're unfamiliar with Binary Search, we recommend watching the Conceptual
//   Overview section of this question's video explanation before starting to code.
// right                                       ^
// mid                      ^
// left                        ^
let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]; //10
const target = 33;

function binarySearch(array, target) {
  //   let result = -1;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] == target) {
  //       //   console.log("i value :", -1);
  //       result = i;
  //     }
  //   }
  //   return result;

  let left = 0;
  let right = array.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2); //4.5 => 4

    if (array[mid] == target) {
      return mid;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, target));

// def binary_search(array, target):
// left = 0
// right = len(array) - 1

// while (left <= right):
//     mid = (right + left) // 2

//     if array[mid] == target:
//         return mid
//     elif array[mid] < target:
//         left = mid + 1
//     else:
//         right = mid - 1

// return -1
