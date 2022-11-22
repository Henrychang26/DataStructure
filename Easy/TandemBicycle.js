//   A tandem bicycle is a bicycle that's operated by two people: person A and
//   person B. Both people pedal the bicycle, but the person that pedals faster
//   dictates the speed of the bicycle. So if person A pedals at a speed of 5
//   , and person B pedals at a speed of 4, the tandem bicycle moves at a speed of
//   5 (tandemSpeed = max(speedA, speedB))

// You're given two lists of positive integers: one that contains the speeds of
// riders wearing red shirts and one that contains the speeds of riders wearing
// blue shirts. Each rider is represented by a single positive integer, which is
// the speed that they pedal a tandem bicycle at. Both lists have the same
// length, meaning that there are as many red-shirt riders as there are
// blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a
// rider wearing a blue shirt to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the minimum
// possible total speed of all of the tandem bicycles being ridden based on an
// input parameter, fastest. If fastest = true, your
// function should return the maximum possible total speed; otherwise it should
// return the minimum total speed.

// "Total speed" is defined as the sum of the speeds of all the tandem bicycles
// being ridden. For example, if there are 4 riders (2 red-shirt riders and 2
// blue-shirt riders) who have speeds of 1, 3, 4, 5, and if they're
// paired on tandem bicycles as follows: [1,4], [5,3], then the
// total speed of these tandem bicycles is 4+ 5 = 9

let redShirtSpeeds = [5, 5, 3, 9, 2]; //[2,3,5,5,9] // [9,5,5,3,2]  // [9,9,7,7,2,1]
let blueShirtSpeeds = [3, 6, 7, 2, 1]; //[1,2,3,6,7]// [1,2,3,6,7]  // [1,2,3,8,9,9]
let fastest = true;
//output = 32
// fastest = true : max > min, else min < max
// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//   let totalCounter = 0;
//   let redUp = redShirtSpeeds.sort((a, b) => a - b); //
//   //   let redDown = redShirtSpeeds.sort((a, b) => b - a); //
//   let blueUp = blueShirtSpeeds.sort((a, b) => a - b); //
//   //   let blueDown = blueShirtSpeeds.sort((a, b) => b - a); //
//   if (fastest) {
//     for (let i = 0; i < redUp.length; i++) {
//       if (redUp[i] > blueUp[redUp.length - 1 - i]) {
//         totalCounter += redUp[i];
//       } else {
//         totalCounter += blueUp[redUp.length - 1 - i];
//       }
//     }
//     console.log(totalCounter);
//     return totalCounter;
//   } else {
//     for (let i = 0; i < redUp.length; i++) {
//       if (redUp[i] > blueUp[i]) {
//         totalCounter += redUp[i];
//       } else {
//         totalCounter += blueUp[i];
//       }
//     }
//     console.log(totalCounter);
//     return totalCounter;
//   }
// }

// tandemBicycleOne(redShirtSpeeds, blueShirtSpeeds, fastest);

// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//   let totalCounter = 0;
//   let redUp = redShirtSpeeds.sort((a, b) => a - b);
//   let blueUp = blueShirtSpeeds.sort((a, b) => a - b);
//   for (let i = 0; i < redUp.length; i++) {
//     if (fastest) {
//       if (redUp[i] > blueUp[redUp.length - 1 - i]) {
//         totalCounter += redUp[i];
//       } else {
//         totalCounter += blueUp[redUp.length - 1 - i];
//       }
//     } else {
//       if (redUp[i] > blueUp[i]) {
//         totalCounter += redUp[i];
//       } else {
//         totalCounter += blueUp[i];
//       }
//     }
//   }
//   return totalCounter;
// }

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => b - a);
  blueShirtSpeeds.sort((a, b) => (fastest ? a - b : b - a));

  let result = 0;

  for (let index = 0; index < redShirtSpeeds.length; index++) {
    result += Math.max(redShirtSpeeds[index], blueShirtSpeeds[index]);
  }
  console.log(result);
  return result;
}

tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
