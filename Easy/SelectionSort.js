//Write a function that takes in an array of integers and returns a sorted
//version of that array. Use the Selection Sort algorithm to sort the array.

// If you're unfamiliar with Selection Sort, we recommend watching the Conceptual
//Overview section of this question's video explanation before starting to code.

// const pointer = 0
//                 ^
let array = [8, 5, 2, 9, 5, 6, 3];

//output = [2,3,5,5,6,8,9]

function selectionSort(array) {
  //   // let result = []
  //   let smallest = 0;
  //   //   for (let i = 0; i < array.length; i++) {
  //   //     if (array[i] > array[i + 1]) {
  //   //       //   [array[i], array[i + 1 + pointer]] = [array[i + 1 + pointer], array[i]];
  //   //       smallest = array[i + 1];
  //   //     } else if (array[i] <= array[i + 1]) {
  //   //       smallest = array[i];
  //   //     }
  //   //     return smallest;
  //   //   }

  //   for (let j = 0; j < array.length; j++) {
  //     for (let i = 0; i < array.length; i++) {
  //       if (array[i] > array[i + 1]) {
  //         //   [array[i], array[i + 1 + pointer]] = [array[i + 1 + pointer], array[i]];
  //         smallest = array[i + 1];
  //       } else if (array[i] <= array[i + 1]) {
  //         smallest = array[i];
  //       }
  //       return smallest;
  //     }
  //     array[j] = smallest;
  //   }
  // }
  // // k
  // //        j
  // //                    i
  // // [8, 5, 2, 9, 5, 6, 3];

  let left = 0;
  let right = 1;
  let indexMin = 0;
  //array.length - 1 because it only compares 6 times
  while (left < array.length - 1) {
    if (array[right] < array[indexMin]) {
      indexMin = right;
    }
    if (right === array.length - 1) {
      [array[left], array[indexMin]] = [array[indexMin], array[left]];
      left++;
      indexMin = left;
      right = left + 1;
    } else {
      right++;
    }
  }
  return array;
}
