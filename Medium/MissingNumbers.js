// You're given an unordered list of unique integers <span>nums</span> in the
// range [1, n], where n represents the length of
// nums + 2. This means that two numbers in this range are missing
// from the list.

// You're given an unordered list of unique integers nums in the
// range [1, n], where n represents the length of
// nums + 2. This means that two numbers in this range are missing
// from the list.

let nums = [1, 4, 3];
//output = [2,5]
//[3]

//Note: indexOf(i) return -1 if unable to match value in array
//1. create length to plus 2
//2. use for loop to check each incremented value
//3. If not found in array, then push into res

//Time O(n) Space O(n)
function missingNumbers(nums) {
  const length = nums.length + 2;
  let result = [];

  for (let i = 1; i <= length; i++) {
    console.log(nums.indexOf(i));

    if (nums.indexOf(i) === -1) {
      //   console.log(i);
      result.push(i);
    }
  }
  return result;
}

missingNumbers(nums);
