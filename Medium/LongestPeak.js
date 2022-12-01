//   Write a function that takes in an array of integers and returns the length of
//   the longest peak in the array.

//   A peak is defined as adjacent integers in the array that are strictly
//   increasing until they reach a tip (the highest value in the peak), at which
//   point they become stricly decreasing. At least 3 integers are required to form a peak.

//  peak pointer //current peak count:
//        l
//                                    i
let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
//         c
// //Output = 6

// //[3,2,3,4,3,2,1]

// function longestPeak(array) {
//   // a && b => a pass -> b
//   let peak = 0;
//   let currentPeak = 3;
//   let i = 1;
//   while (i < array.length - 1) {
//     let leftPointer = i - 1;
//     let rightPointer = i + 1;
//     while (array[leftPointer] < array[i] && array[i] > array[rightPointer]) {
//       if (array[leftPointer] < array[leftPointer - 1]) {
//         // console.log(longestPeak);
//         currentPeak++;
//         leftPointer--;
//       }
//       if (array[rightPointer] < array[rightPointer + 1]) {
//         currentPeak++;
//         rightPointer++;
//       }
//       i++;
//       console.log(i);
//     }
//     if (currentPeak > peak) {
//       peak = currentPeak;
//       console.log(peak);
//     }
//   }
//   console.log(peak);
//   return peak;
// }
//   console.log(longestPeak);
//   return longestPeak;

longestPeak(array);

function longestPeak(array) {
  let maxLength = 0;
  let count = 1;

  for (i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      let j = i;
      let k = i;
      while (array[j - 1] < array[j]) {
        j--;
        count++;
      }
      while (array[k] > array[k + 1]) {
        k++;
        count++;
      }
      maxLength = Math.max(maxLength, count);
      count = 1;
      i = k;
    }
  }
  return maxLength;
}
