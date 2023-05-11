// You're given a Linked List with at least one node. Write a function
// that returns the middle node of the Linked List. If there are two middle
// nodes (i.e. an even length list), your function should return the second
// of these nodes.

//     Each LinkedList node has an integer value as well as
//     a next node pointing to the next node in the list or to
//     None/null if it's the tail of the list.



let linkedList = 2 -> 7 -> ->3 -> 5
//output 3-> 5


class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //Time O(N) Space O(1)
  
  function middleNode(linkedList) {
    let slowNode = linkedList
    let fastNode = linkedList
    while (fastNode !== null && fastNode.next !== null) {
      slowNode = slowNode.next
      fastNode = fastNode.next.next
    }
    return slowNode
  }