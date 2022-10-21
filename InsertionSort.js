// //Write a function that takes in an array of integers and returns a sorted
// //version of that array. Use the Insertion Sort algorithm to sort the array.

// //If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual
// //Overview section of this question's video explanation before starting to code.
// let array = [8, 5, 2, 9, 5, 6, 3];
// [5, 2, 8, 9, 5, 6, 3];
// [2,5,8]
// [9,2,5,8] => [2,9,5,8] => [2,5,9,8] => [2,5,8,9]
// const length = array.length / 2;
// console.log(Math.floor(length));
// let result = [5,2,2];
// // let array2 = [8, 5, 2, 9, 5, 6, 3];
// [8,2,9,5,6,3]

// //output [2,3,5,5,6,8,9]

// // sudo:
// // array1 = [array[0]]
// // array2 = index1 - .length
// function insertionSort(array) {
//   let counter = 1
//   let indexMoveToLeft = 1; // 0 stay, 1 to the right, -1 to the left
//   // [5,8] => 2 [2,5,8] => 9 []
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] <= array[i - 1]) {
//       swap()
//       counter++;
//       if(array[i-1] <= array[i-1-1]){} //1 => 2
//     }
//   }
// }
// function swap(){
//     [array[i], array[i-counter]] = [[array[i -counter]], [array[i]]]
// }

function insertionSort(array) {
  for (let i = 1; 1 < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j -= 1;
    }
  }
  return array;
}

// ======================================================================
// //Write a function that takes in an array of integers and returns a sorted
// //version of that array. Use the Insertion Sort algorithm to sort the array.

// //If you're unfamiliar with Insertion Sort, we recommend watching the Conceptual
// //Overview section of this question's video explanation before starting to code.

let array = [8, 5, 2, 9, 5, 6, 3];

//output [2,3,5,5,6,8,9]

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    //start looping from index 1
    let j = i; // j = pointer
    while (j > 0 && array[j] < array[j - 1]) {
      //condition statement loop
      [array[j], array[j - 1]] = [array[j - 1], array[j]]; // swap
      j -= 1; //pointer to left
    }
  }
  return array;
}

console.log(insertionSort(array));
