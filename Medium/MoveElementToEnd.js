//   You're given an array of integers and an integer. Write a function that moves
//   all instances of that integer in the array to the end of the array and returns
//   the array.

//   The function should perform this in place (i.e., it should mutate the input
//     array) and doesn't need to maintain the order of the other integers.

let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2;

//Output = [1,3,4,2,2,2,2,2]

// let shift = array.shift();
// array.push(shift);
// console.log(shift);
// console.log(array);

//Solution 1

function moveElementToEnd(array, toMove) {
  let pointer = 0;
  let temp;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toMove) {
      temp = array[i];
      array[i] = array[pointer];
      array[pointer] = temp;

      pointer++;
      console.log(pointer);
    }
  }
  console.log(array);
  return array;
}
//[2,1, 1, 1, 1, 1, 3, 4, 2]

moveElementToEnd(array, toMove);

//Solution 2

function moveElementToEnd(array, toMove) {
  let start = 0;
  let end = array.length - 1;
  //   let temp;
  while (end > start) {
    if (array[start] == toMove) {
      [array[start], array[end]] = [array[end], array[start]];
      //   temp = array[start];
      //   array[start] = array[end];
      //   array[end] = temp;
      end--;
    } else {
      start++;
    }
  }
  console.log(array);
  return array;
}
