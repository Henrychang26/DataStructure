array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;

//Solution 1:

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      secondNum = array[j];
      if (firstNum + secondNum == targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}
exports.twoNumberSum = twoNumberSum;

//Solution 2:

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

//Solution 3
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b); //sort numbers in array from smallest to biggest
  const left = 0; //index 0 starting from the left
  const right = array.length - 1; //last index of the array
  while (left < right) {
    currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
