// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. The function should find all quadruplets in
// the array that sum up to the target sum and return a two-dimensional array of
// all these quadruplets in no particular order.

// If no four numbers sum up to the target sum, the function should return an
// empty array.

let array = [7, 6, 4, -1, 1, 2];

let targetSum = 16;

//Output = [[7,6,4,-1],[7,6,1,2]]

//1. Create a hash table and push all pairs
//2. loop through rest of the array to find matches
//3. if found push into result

//Time average O(n^2) worst O(n^3)
//Space O(n^2)
//Solution 1
function fourNumberSum(array, targetSum) {
  let sumMap = {};
  let fourSum = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[j] + array[i];
      let diff = targetSum - sum;
      if (sumMap[diff]) {
        sumMap[diff].forEach((sum) => {
          fourSum.push([sum[0], sum[1], array[j], array[i]]);
        });
      }
    }
    for (let k = 0; k < i; k++) {
      let sum = array[k] + array[i];
      if (sumMap[sum])
        sumMap[sum].push([array[k], array[i]]); // {[7,6, 1,2], [9, 4,1,2]}
      else sumMap[sum] = [[array[k], array[i]]]; // {13:[7,6]}
    }
  }
  return fourSum;
}

//Solution 2
function fourNumberSum(array, targetSum) {
  let result = [];
  let hash = {};
  let counterK = 0;
  let counterJ = 0;
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      counterJ++;
      console.log("counterJ ++ : ", counterJ);
      let tempSum = array[i] + array[j];
      console.log("tempSum is :", tempSum);
      let diff = targetSum - tempSum;
      console.log("diff is :", diff);
      if (hash[diff]) {
        console.log("hash[diff] is :", hash[diff] === true);
        for (const pair of hash[diff]) {
          result.push(pair.concat([array[i], array[j]]));
        }
      }
      //   console.log(Object.entries(hash));
    }
    for (let k = 0; k < i; k++) {
      counterK++;
      console.log("counterK ++ : ", counterK);
      let tempSum = array[i] + array[k];
      console.log("array[k] is :", array[k]);
      console.log("tempSum[i+k] is :", tempSum);
      if (!hash[tempSum]) {
        console.log("!hash[tempSum] is :", !hash[tempSum]);
        hash[tempSum] = [[array[k], array[i]]];
      } else {
        console.log("hash[tempSum] is :", hash[tempSum]);
        hash[tempSum].push([array[k], array[i]]);
      }
    }
  }
  return result;
}
