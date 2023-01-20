//   Write a function that takes in the head of a Singly Linked List and an integer

//   The removal should be done in place, meaning that the original data structure
//   should be mutated (no new structure should be created).

//   Furthermore, the input head of the linked list should remain the head of the
//   linked list after the removal is done, even if the head is the node that's
//   supposed to be removed. In other words, if the head is the node that's
//   supposed to be removed, your function should simply mutate its
//   value and next pointer.

// Note that your function doesn't need to return anything.
//   You can assume that the input Linked List will always have at least two nodes
//   and, more specifically, at least k nodes.

// let head = 0 -> 1 ->2 ->3 ->4 ->5 ->6 ->7 ->8 ->9
let k = 4;

//Output 0 -> 1 ->2 ->3 ->4 ->5 ->7 ->8 ->9

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Solution 1
function removeKthNodeFromEnd(head, k) {
  let counter = 0;
  let current = head;
  let currentPosition = 0;
  let target = head;
  while (current != null) {
    current = current.next;
    counter++;
  }

  if (k >= counter) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (currentPosition != counter - k - 1) {
    target = target.next;
    currentPosition++;
  }
  target.next = target.next.next;

  console.log(counter);
}
function removeFirstNode(head) {
  if (head == null) return null;

  // Move the head pointer to the next node
  temp = head;
  head = head.next;

  return head;
}
// Function to push node at head
function push(head_ref, new_data) {
  new_node = new Node();
  new_node.data = new_data;
  new_node.next = head_ref;
  head_ref = new_node;
  return head_ref;
}

// Driver code

// Start with the empty list /
head = null;

// Use push() function to con
// the below list 8 . 23 . 11 . 29 . 12 /
head = push(head, 12);
head = push(head, 29);
head = push(head, 11);
head = push(head, 23);
head = push(head, 8);

head = removeFirstNode(head);
for (temp = head; temp != null; temp = temp.next) console.log(temp.data + " ");

// This code is contributed by todaysgaurav

//Solution 2
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let nodeBefore = head;
  let counter = 0;
  let nodePointer = head;

  while (nodePointer !== null) {
    if (counter > k) {
      nodeBefore = nodeBefore.next;
    }
    nodePointer = nodePointer.next;
    counter++;
  }
  if (k >= counter) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  nodeBefore.next = nodeBefore.next.next;
}
