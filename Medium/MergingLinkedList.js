// You're given two Linked Lists of potentially unequal length. These Linked
// Lists potentially merge at a shared intersection node. Write a function
// that returns the intersection node or returns None /null if there is no intersection.
// Each LinkedList node has an integer value as well as
// a next node pointing to the next node in the list or to
// None/null if it's the tail of the list.

// Note: Your function should return an existing node. It should not modify
// either Linked List, and it should not create any new Linked Lists.

let linkedListOne = 2 -> 3 -> 1 -> 4
let linkedListTwo = 8 _> 1 -> 4 ->4

//Output 1 -> 4

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function mergingLinkedLists(linkedListOne, linkedListTwo) {
    let currentOne = linkedListOne
    let currentTwo = linkedListTwo
  
    while(currentOne !==null && currentTwo !== null){
      if(currentOne.value == currentTwo.value){
        return currentOne
      }
  
      if(currentOne !== null) currentOne = currentOne.next
      if(currentTwo !== null) currentTwo = currentTwo.next
    }
    return null;
  }

  //Solution 
  function mergingLinkedLists(linkedListOne, linkedListTwo) {
    let first = linkedListOne
    let second = linkedListTwo
  
    while(first !== second){
      first = first === null ? linkedListTwo : first.next
      second = second === null ? linkedListOne : second.next
    }
    return first
  }