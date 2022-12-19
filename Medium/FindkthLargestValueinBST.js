
//   Write a function that takes in a Binary Search Tree (BST) and a positive
//   integer k and returns the kth largest integer contained in the
//   BST.

//   You can assume that there will only be integer values in the BST and that k
//   is less than or equal to the number of nodes in the tree.

  
//   Also, for the purpose of this question, duplicate integers will be treated as
//   distinct values. In other words, the second largest value in a BST containing
//   values {5,7,7} will be 7 not -5.

let tree = 15
        /     \
      5      20
    /   \   /   \
   2     5 17   22
 /   \         
1     3       
// [22,20,17,15,5,5,3,2,1]
let k = 3
// let array = []
//Output = 17

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k, array = []) {
    if (!tree) return array;
    findKthLargestValueInBst(tree.right, array);
    array.push(tree.value);
    console.log(`array.push is ${array}`);
    findKthLargestValueInBst(tree.left, array);
    return array[k] ? array[k] : -1;
    // return array[k] ;
        
    // return -1;
  }

  // =================
  function maxToMinPrint(tree, k, array = []) {
    if (!tree) return array;
    maxToMinPrint(tree.right, k, array);
    array.push(tree.value);
    console.log(`array.push is ${array}`);
    maxToMinPrint(tree.left, k, array);
    return array[k - 1] ? array[k - 1] : -1;
  }
  
//===========================
  //counter = k
  //counter --
  //if(counter === 0) return tree.value
 function findKthLargestValueInBst(tree, k) {
  let kthLargestValue = null

  function findLargestValueHelper(tree){ //22
    if (!tree) return
// 15 : 20(5) => 20:22(17)=>22: null null
    findLargestValueHelper(tree.right); //22
    if(k === 0) return kthLargestValue
    kthLargestValue = tree.value //22 :2 => 20 :1 => 17
    console.log(kthLargestValue)
    k-- // 3 => 2 => 1 =>
    console.log(k)
    findLargestValueHelper(tree.left);
  }
  findLargestValueHelper(tree)
  return kthLargestValue
}

//func 15 => func 20 => func 22
// .            2 .       1 
  