// Write a function that takes in a Binary Tree with at least one node and
// checks if that Binary Tree can be split into two Binary Trees of equal sum by
// removing a single edge. If this split is possible, return the new sum of each
// Binary Tree, otherwise return 0. Note that you do not need to return the edge
// that was removed.

//   The sum of a Binary Tree is the sum of all values in that Binary Tree.

//   Each BinaryTree node has an integer value, a
//   left child node, and a right child node. Children
//   nodes can either be <span>BinaryTree</span> nodes themselves or
//   None/null.

// let tree  =     1
//              /     \
//             3       -2
//            /   \    /  \
//           6    -5  5    2
//         /
//        2

//output = 6

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function splitBinaryTree(tree) {
  // Write your code here.
  return -1;
}
