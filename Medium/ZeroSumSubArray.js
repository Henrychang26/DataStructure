// You're given a list of integers <span>nums</span>. Write a function that
// returns a boolean representing whether there exists a zero-sum subarray of
// nums.

// A zero-sum subarray is any subarray where all of the values add up to zero.
// A subarray is any contiguous section of the array. For the purposes of this
// problem, a subarray can be as small as one element and as long as the
// original array.

let nums = [-5, -5, 2, 3, -2];

//1. Calculate total sum from each index
//2. keep track of every total sum in a Set
//3. If the total sum has already occured in the set, it means zero sub array exists
//4. meaning to equal the same sum, everything in between add up to zero
//Time O(n) Space O(n)
function zeroSumSubarray(nums) {
  const sums = new Set();
  let count = 0;

  for (const num of nums) {
    sums.add(count);
    console.log(sums);
    count += num;
    console.log(count);
    if (sums.has(count)) return true;
  }
  return false;
}
zeroSumSubarray(nums);
