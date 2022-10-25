//   Write a function that takes in an array of at least three integers and,
//   without sorting the input array, returns a sorted array of the three largest
//   integers in the input array.

let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

//Output = [18 ,141, 541]

//Hints: Can you keep track of the three largest numbers in an array as you traverse the input array?
//Following the suggestion in Hint #1, try traversing the input array and updating the three largest numbers if necessary by shifting them accordingly.

function findThreeLargestNum(array) {
  //   const newArry = new Array(3);
  //   let pointer = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > array[i + 1 + pointer]) {
  //       pointer++;
  //     } else {
  //       return array[i];
  //     }
  //   }
  // }

  //following method compares and re assigns as it loops through array.
  let num1 = -Infinity;
  let num2 = -Infinity;
  let num3 = -Infinity;
  let temp;

  for (let num of array) {
    if (num > num3) {
      num3 = num;
      if (num3 > num2) {
        temp = num2;
        num2 = num3;
        num3 = temp;
        if (num2 > num1) {
          temp = num1;
          num1 = num2;
          num2 = temp;
        }
      }
    }
  }
  return [num3, num2, num1];
}
console.log(findThreeLargestNum(array));
