//   Write a function that takes in a non-empty sorted array of distinct integers,
//   constructs a BST from the integers, and returns the root of the BST.

//   The function should minimize the height of the BST.

//   You've been provided with a BST class that you'll have to use to
//   construct the BST.

//   A BST is valid if and only if all of its nodes are valid BST node.A

//   Note that the BST class already has an insert method
//   which you can use if you want.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(2);
// const f = new Node(1);

let array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
//  left : 5 , 2 ,1, 13
// right : 7 , 14, 15 , 22
// counter = 9
function minHeightBst(array) {
  let counter = array.length - 1; //8
  let root = new BST(array[Math.floor(array.length / 2)]); // 10
  while (counter > 0) {
    let start = 0;
    let end = array.length - 1; // 8 => 2
    let mid = Math.floor(8 / 2); // index : 4 => 1
    let leftNewMid = Math.floor(mid / 2); // 2 => 0
    let rightNewMid = Math.floor(mid / 2 + mid); // 6
    // left side
    root.left = root.insert(array[leftNewMid]); // 1: 5
    counter--; // 7
    leftNewMid = leftNewMid / 2; // index : 2(5)
    root.right = root.insert(array[leftNewMid + 1]); // 1 : 7
    counter--; // 6
    // rightNewMid = rightNewMid / 2 + rightNewMid; // index : 6(14)

    // right sid
    root.right = root.insert(array[rightNewMid]); // 1: 5
    counter--; // 7
    // ightNewMid = rightNewMid / 2; // index : 2(5)
    root.right = root.insert(array[rightNewMid + -1]); // 1 : 7
    counter--; // 6
    rightNewMid = rightNewMid / 2 + rightNewMid;
  }

  //   console.log(a);
  //   currentNode.left =
}

// helper get mid index

minHeightBst(array);

function minHeightBst(array, left = 0, right = array.length - 1) {
  if (left > right) return null;
  const mid = Math.floor((left + right) / 2);
  const bst = new BST(array[mid]);
  bst.left = minHeightBst(array, left, mid - 1);
  bst.right = minHeightBst(array, mid + 1, right);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
