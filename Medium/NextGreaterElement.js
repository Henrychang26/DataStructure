// Write a function that takes in an array of integers and returns a new array
// containing, at each index, the next element in the input array that's greater
// than the element at that index in the input array.

//   In other words, your function should return a new array where
//   outputArray[i] is the next element in the input array that's
//   greater than inputArray[i]. If there's no such next greater
//   element for a particular index, the value at that index in the output array
//   should be -1. For example, given array = [1, 2],
//   your function should return [2, -1].

//   In other words, your function should return a new array where
//   outputArray[i] is the next element in the input array that's
//   greater than inputArray[i]. If there's no such next greater
//   element for a particular index, the value at that index in the output array
//   should be -1. For example, given array = [1, 2],
//   your function should return [2, -1].

let array = [2, 5, -3, -4, 6, 7, 2];

//Output = [5, 6, 6, 6, 7, -1, 5]

//Need to loop throgh the array twice
//initial res [] with -1 across all index
//push index into stack
//checks with next index, if satisfy condition: pop out of stack and update res array
//then push currect index into stack for next repeat

//Time O(n)time Space O(n)

function nextGreaterElement(array) {
  const stack = [];
  const res = new Array(array.length).fill(-1);
  for (let i = 0; i < 2 * array.length; i++) {
    const circularIdx = i % array.length;

    while (
      stack.length > 0 &&
      array[stack[stack.length - 1]] < array[circularIdx]
    ) {
      const top = stack.pop();
      res[top] = array[circularIdx];
    }
    stack.push(circularIdx);
  }

  return res;
}
