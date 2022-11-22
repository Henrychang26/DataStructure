let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;

// function threeNumSum(array, targetSum) {
//   result = [];

//   array.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; i++) {
//     let potentialMatch = targetSum - array[i];
//     //   const firstNum = array[i + 1];
//     for (let j = i + 1; j <= array.length; j++) {
//       let leftPointer = j + 1;
//       let rightPointer = array.length - 1;
//       if (potentialMatch > array[leftPointer] + array[rightPointer]) {
//         leftPointer++;
//       }
//       if (potentialMatch < array[leftPointer] + array[rightPointer]) {
//         rightPointer--;
//       }
//       if (potentialMatch === array[leftPointer] + array[rightPointer]) {
//         result.push([array[i], array[leftPointer], array[rightPointer]]);
//         leftPointer++;
//         rightPointer--;
//       }
//     }
//   }
//   return result;
// }

// for (let i = 0; i < array.length; i++) {
//   let potentialMatch = targetSum - array[i];
//   for (let j = 1; j < array.length; j++) {
//     potentialMatch = potentialMatch - array[j];
//     for (let k = 2; k < array.length; k++) {
//       if (potentialMatch === array[k]) {
//         result.push([array[i], array[j], array[k]]);
//       }
//     }
//   }
//   return result;
// }

function threeNumberSum(array, targetSum) {
  let result = [];
  array.sort((a, b) => a - b);

  for (let index = 0; index < array.length; index++) {
    if (array[index] >= targetSum) {
      break;
    }
    let start = index + 1,
      end = array.length - 1;

    while (start < end) {
      const sum = array[index] + array[start] + array[end];
      if (sum === targetSum) {
        result.push([array[index], array[start], array[end]]);
        start++;
        end--;
      } else if (sum < targetSum) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
}
