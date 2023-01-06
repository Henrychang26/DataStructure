//   You're given a list of edges representing an unweighted, directed
//   graph with at least one node. Write a function that returns a boolean
//   representing whether the given graph contains a cycle.

//   For the purpose of this question, a cycle is defined as any number of
//   vertices, including just one vertex, that are connected in a closed chain. A
//   cycle can also be defined as a chain of at least one vertex in which the first
//   vertex is the same as the last.

//   The given list is what's called an adjacency list, and it represents a graph.
//   The number of vertices in the graph is equal to the length of
//   edges, where each index i in
//   edges contains vertex i's outbound edges, in no
//   particular order. Each individual edge is represented by a positive integer
//   that denotes an index (a destination vertex) in the list that this vertex is
//   connected to. Note that these edges are directed, meaning that you can only
//   travel from a particular vertex to its destination, not the other way around
//   (unless the destination vertex itself has an outbound edge to the original
//   vertex).

//   Also note that this graph may contain self-loops. A self-loop is an edge that
//   has the same destination and origin; in other words, it's an edge that
//   connects a vertex to itself. For the purpose of this question, a self-loop is
//   considered a cycle.

//   For a more detailed explanation, please refer to the Conceptual Overview
//   section of this question's video explanation.

// let edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];

//Output = true

// function cycleInGraph(edges) {
//   for (let i = 0; i < edges.length; i++) {
//     for (let j = 0; j < edges[i].length; j++) {
//       const target = i;
//       return isCycle(i, j, edges, target); // true or false //isCycle(0, 0, edges, 0)
//       //   if (edges[i][j] == true) return true;
//     }
//   }
//   return false;
// }

// function isCycle(i, j, edges, target) {
//   // true or false
//   let value = edges[i][j]; // 1
//   console.log(i, j);
//   console.log(`value is ${value}`);
//   console.log(`target is ${target}`);
//   if (edges[value].length == 0) return;

//   while (j < edges[value].length) {
//     let num = isCycle(value, j, edges, target);
//   }
//   if ((edges[value] = target)) return true;

//   //   for (let j = 0; j < edges[value].length; j++) {
//   //     //isCycle(1, 0=>1, edges, 0)
//   //     // isCycle(value, j, edges, target);
//   //     if (value == target) {
//   //       return true;
//   //     } else isCycle(value, j, edges, target);
//   //   }
// }
// console.log(cycleInGraph(edges));

let edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];
//Solution
function cycleInGraph(edges) {
  for (let start = 0; start < edges.length; start++) {
    let stack = [...edges[start]];
    console.log(`stack before is ${stack}`);
    let visited = new Set();
    while (stack.length) {
      const node = stack.pop();
      console.log(`stack is ${stack}`);
      console.log(`node is ${node}`);
      if (node === start) return true;
      if (visited.has(node)) break;
      else {
        stack.push(...edges[node]);
        console.log(stack);
        visited.add(node);
        console.log(visited);
      }
    }
  }
  return false;
}
cycleInGraph(edges);
