// Write a function that takes in an array of at least two integers and that
// returns an array of the starting and ending indices of the smallest subarray
// in the input array that needs to be sorted in place in order for the entire
// input array to be sorted (in ascending order).

// If the input array is already sorted, the function should return [-1,1]

let array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

//Output = [3,9]

//1. Go through input array and find the largest and smallest numbers that are out of order
//2. With these 2 numbers go through input array and find proper position

//Time O(n) Space O(1)

//Solution 1
function subarraySort(array) {
  let smallest = Infinity;
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (isOutOfOrderHelper(i, number, array)) {
      smallest = Math.min(number, smallest); // 7, 6
      largest = Math.max(number, largest); // 7 ,12
    }
  }

  if (smallest === Infinity) {
    return [-1, -1];
  }
  let start = 0;
  while (smallest >= array[start]) {
    start++;
  }
  let end = array.length - 1;
  while (largest <= array[end]) {
    end--;
  }
  return [start, end];
}

function isOutOfOrderHelper(i, number, array) {
  if (number > array[i + 1] || number < array[i - 1]) {
    console.log("out of order");
    return true;
  } else {
    return false;
  }
}

//Solution 2

function subarraySort(array) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (isOutOfOrder(i, num, array)) {
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
  }
  if (min === Infinity) {
    return [-1, -1];
  }

  let left = 0;
  while (min >= array[left]) {
    left++;
  }

  let right = array.length - 1;
  while (max < array[right]) {
    right--;
  }
  return [left, right];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}

//
