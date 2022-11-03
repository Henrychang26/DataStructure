// let array = [1, 2, 3, 4, 5, 6];

// console.log(array.pop());

// console.log(array);

// function nodeDepths(root) {
//   let stack = [[root, 0]],
//     depths = 0;
//   while (stack.length) {
//     console.log(stack.length);
//     let [node, depth] = stack.pop();
//     console.log(stack);
//     depths += depth;
//     console.log(depths);
//     node.left && stack.push([node.left, depth + 1]);
//     node.right && stack.push([node.right, depth + 1]);
//   }
//   return depths;
// }

// // This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

{
    "tree": {
        "nodes": [
            {"id": "1", "left": "2", "right": "3", "value": 1},
            {"id": "2", "left": "4", "right": "5", "value": 2},
            {"id": "3", "left": "6", "right": "7", "value": 3},
            {"id": "4", "left": "8", "right": "9", "value": 4},
            {"id": "5", "left": null, "right": null, "value": 5},
            {"id": "6", "left": null, "right": null, "value": 6},
            {"id": "7", "left": null, "right": null, "value": 7},
            {"id": "8", "left": null, "right": null, "value": 8},
            {"id": "9", "left": null, "right": null, "value": 9}
        ],
        "root": "1"
    }
}

let stack = [[root, 0]];
console.log(stack);