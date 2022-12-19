
// Write a function that takes in a Binary Tree (where nodes have an additional
//  pointer to their parent node) as well as a node contained in that tree and
// returns the given node's successor.
  
//  A node's successor is the next node to be visited (immediately after the given
// node) when traversing its tree using the in-order tree-traversal technique. A
// node has no successor if it's the last node to be visited in the in-order
// traversal.


let tree = 
        1
      /   \
     2     3
   /   \  /  \
  4     5 9   2
 /            /\
6            7  8 

let node = 5

//Output = 1


class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    if(tree ==null ) return 
    

    findSuccessor(tree.left, node)

    findSuccessor(tree.right, node)

  }

  function findSuccessor(tree, node){
    if(tree == null) return
    tree.parent = tree
    if(tree.parent == node){
        return tree.value
    }

    findSuccessor(tree.left, node)
    findSuccessor(tree.right, node)

  }

  //Solution
  function findSuccessor(tree, node) {
    let successor = null
    let found = false
  
    function inOrderTraverse(tree){
      if(tree.left) inOrderTraverse(tree.left)
      if(found){
        successor = tree
        found = false
      }
      if(tree === node) found = true
      if(tree.right) inOrderTraverse(tree.right)
    }
    inOrderTraverse(tree)
    return successor
  }