//   Write a function that takes in a Binary Search Tree (BST) and a target integer
//   value and returns the closest value to that target value contained in the BST.

// tree=    10 12
//        /     \
//      5       15
//     /   \   /   \
//    2     5 13   22
//   /           \
//  1            14

const target = 12;

// function findClosestValueInBst(tree, target, closestNumber = Infinity) {
//   if (tree === null) {
//     return closestNumber;
//   } else {
//     if (Math.abs(tree.value - target) < Math.abs(closestNumber - target)) {
//       closestNumber = tree.value;
//     }
//     if (target > tree.value) {
//       findClosestValueInBst(tree.right, target, closestNumber);
//     } else {
//       findClosestValueInBst(tree.left, target, closestNumber);
//     }
//     return closestNumber;
//   }
// }

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

///
// const target = 12;

function findClosestValueInBst(tree, target, closestNumber = Infinity) {
  if (tree === null) {
    return closestNumber;
  } else {
    if (Math.abs(tree.value - target) < Math.abs(closestNumber - target)) {
      closestNumber = tree.value; // 10, 15
    }
    if (target > tree.value) {
      return findClosestValueInBst(tree.right, target, closestNumber);
    } else {
      return findClosestValueInBst(tree.left, target, closestNumber);
    }
  }
}
