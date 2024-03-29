// Given an array of buildings and a direction that all of the buildings face,
// return an array of the indices of the buildings that can see the sunset.

// A building can see the sunset if it's strictly taller than all of the
// buildings that come after it in the direction that it faces.

//   The input array named buildings contains positive, non-zero
//   integers representing the heights of the buildings. A building at index
//   i thus has a height denoted by buildings[i]. All of
//   the buildings face the same direction, and this direction is either east or
//   west, denoted by the input string named direction, which will
//   always be equal to either "EAST" or "WEST". In
//   relation to the input array, you can interpret these directions as right for
//   east and left for west.

// Important note: the indices in the ouput array should be sorted in ascending
// order.

let buildings = [3, 5, 4, 4, 3, 1, 3, 2];
let direction = "EAST";

//Output = [1,3,6,7]

//1. Reverse the opposite direction its facing.
//2. keep track of highest number.
//3. If condition is satified then push into result array.

//O(n) time O(n) space
function sunsetViews(buildings, direction) {
  if (direction == "EAST") {
    let result = [];
    let currentHigh = 0;
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (buildings[i] > currentHigh) {
        result.push(i);
        currentHigh = buildings[i];
      }
    }
    return result.reverse();
  }

  if (direction == "WEST") {
    let result = [];
    let currentHigh = 0;
    for (let i = 0; i <= buildings.length - 1; i++) {
      if (buildings[i] > currentHigh) {
        result.push(i);
        currentHigh = buildings[i];
      }
    }
    return result;
  }
}
