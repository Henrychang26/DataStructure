// Write a DoublyLinkedList class that has a head and a
// tail, both of which point to either a linked list
// Node or None / null. The class should
// support:

// Setting the head and tail of the linked list.

// Inserting nodes before and after other nodes as well as at given positions
// (the position of the head node is 1
// Removing given nodes and removing nodes with given values.
// Searching for nodes with given values.

//   Note that the setHead, setTail,
//   insertBefore, insertAfter,
//   insertAtPosition, and remove methods all take in
//   actual Nodes as input parameters—not integers (except for
//   insertAtPosition, which also takes in an integer representing the
//   position); this means that you don't need to create any new Nodes
//   in these methods. The input nodes can be either stand-alone nodes or nodes
//   that are already in the linked list. If they're nodes that are already in the
//   linked list, the methods will effectively be moving the nodes within
//   the linked list. You won't be told if the input nodes are already in the
//   linked list, so your code will have to defensively handle this scenario.

// If you're doing this problem in an untyped language like Python or JavaScript,
// you may want to look at the various function signatures in a typed language
// like Java or TypeScript to get a better idea of what each input parameter is.

//   Each Node has an integer value as well as a
//   prev node and a next node, both of which can point
//   to either another node or None/null.
class Node {
  //node(a),node(b)
  constructor(value) {
    this.value = value; //[[prev][value][next]] [[prev][value][next]]
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  //[[head][tail]]
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail == null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // node(c), node(b)
    if (nodeToInsert == this.head && nodeToInsert == this.tail) {
      return;
    }
    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev == null) {
      this.head = nodeToInsert;
    } else node.prev.next = nodeToInsert;

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert == this.head && nodeToInsert == this.tail) {
      return;
    }
    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next == null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition !== position) {
      node = node.next;
      currentPosition++;
    }
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value == value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node == this.head) {
      this.head = this.head.next;
    }
    if (node == this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null; // true  false: node === null
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}


// ==========================================
// Write a DoublyLinkedList class that has a head and a
// tail, both of which point to either a linked list
// Node or None / null. The class should
// support:

// Setting the head and tail of the linked list.

// Inserting nodes before and after other nodes as well as at given positions
// (the position of the head node is 1
// Removing given nodes and removing nodes with given values.
// Searching for nodes with given values.

//   Note that the setHead, setTail,
//   insertBefore, insertAfter,
//   insertAtPosition, and remove methods all take in
//   actual Nodes as input parameters—not integers (except for
//   insertAtPosition, which also takes in an integer representing the
//   position); this means that you don't need to create any new Nodes
//   in these methods. The input nodes can be either stand-alone nodes or nodes
//   that are already in the linked list. If they're nodes that are already in the
//   linked list, the methods will effectively be moving the nodes within
//   the linked list. You won't be told if the input nodes are already in the
//   linked list, so your code will have to defensively handle this scenario.

// If you're doing this problem in an untyped language like Python or JavaScript,
// you may want to look at the various function signatures in a typed language
// like Java or TypeScript to get a better idea of what each input parameter is.

//   Each Node has an integer value as well as a
//   prev node and a next node, both of which can point
//   to either another node or None/null.
class Node {
  //linked List
  //node(a),node(b)
  constructor(value) {
    this.value = value; //[[prev][value][next]] [[prev][value][next]]
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  //[[head][tail]]
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head == null) {
      // if empty, node will be this.head and this.tail
      this.head = node;
      this.tail = node;
      return;
    } // else, run this.insertBefore(this.head, node)
    this.insertBefore(this.head, node);
    // before this.head, insert node to be the head
  }

  setTail(node) {
    if (this.tail == null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // before node, insert nodeToInsert
    if (nodeToInsert == this.head && nodeToInsert == this.tail) {
      //if nodeToInsert is head and tail
      return;
    }
    this.remove(nodeToInsert); // remove prev and next pointers

    nodeToInsert.prev = node.prev; // set pointer prev equal to node.prev
    nodeToInsert.next = node; // set pointer next equal to node
    if (node.prev == null) {
      // if node.prev == null means node is head
      this.head = nodeToInsert; // set nodeToInsert to be head
    } else node.prev.next = nodeToInsert;
    // otherwise set nodeToInsert to be node.prev.next

    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert == this.head && nodeToInsert == this.tail) {
      return;
    }
    this.remove(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next == null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head; // define node = this.head for while loop later
    let currentPosition = 1; // current index starts at 1
    while (node !== null && currentPosition !== position) {
      node = node.next;
      currentPosition++;
    } // while loop stops when position reaches
    if (node !== null) {
      // if position is no at after this.tail which is not null
      this.insertBefore(node, nodeToInsert); // run this.insertBefore()
      // param are (node, nodeToInsert)
    } else {
      // else position is after this.tail and set nodeToInsert to be this.tail
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value == value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node == this.head) {
      this.head = this.head.next;
    }
    if (node == this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    console.log(`node !== null is :${node !== null}`);
    return node !== null;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    // console.log(`disconnect ${node.value}.prev`);
    node.next = null;
    // console.log(`disconnect ${node.value}.next`);
  }
}

let valOne = new Node(1);
let valTwo = new Node(2);
let valThree = new Node(3);
let valFour = new Node(4);
let valFive = new Node(5);
let valSix = new Node(6);
let valTail = new Node(4);
let valTest = new Node(4);
let valSeven = new Node(7);
let valHead = new DoublyLinkedList();
valHead.setHead(valOne);
valHead.setTail(valTwo); //************************{1,2}
valHead.insertAfter(valOne, valThree); //**********{1,3,2}
valHead.insertBefore(valOne, valFour); //**********{4,1,3,2}
valHead.insertBefore(valTwo, valFive); //**********{4,1,3,5,2}
valHead.insertAfter(valFive, valSix); //***********{4,1,3,5,6,2}
valHead.setTail(valTail); //value: 4 **************{4,1,3,5,6,2,4}
valHead.insertBefore(valTail, valTest); //value: 4 {4,1,3,5,6,2,4,4}
valHead.insertAtPosition(8, valSeven); //**********{4,1,3,5,6,2,4,7,4}
valHead.setTail(valOne); //************************{4,3,5,6,2,4,7,4,1}
valHead.containsNodeWithValue(4); //node !== null is :true
valHead.containsNodeWithValue(8); //node !== null is :false

// valHead.insertAfter(valTwo, valThree);
console.log(valHead);
// console.log(Object.entries(valHead.head));

function printDoublyLinkedList(root) {
  let current = root.head;
  if (current === null) {
    console.log("empty root");
    return;
  }
  let index = 1;
  console.log("first node is  " + current.value + " index is " + index);
  while (current.next != null) {
    current = current.next;
    index++;
    console.log("next node is " + current.value + " index is " + index);
  }
  console.log(`total index is ${index}`);
  return index;
}
printDoublyLinkedList(valHead);
