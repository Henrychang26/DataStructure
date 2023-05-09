// You're given a list of edges representing a connected,
// unweighted, undirected graph with at least one node. Write a function that
// returns a boolean representing whether the given graph is two-colorable.

// A graph is two-colorable (also called bipartite) if all of the nodes can
// be assigned one of two colors such that no nodes of the same color are
// connected by an edge.

// The given list is what's called an adjacency list, and it represents a graph.
// The number of vertices in the graph is equal to the length of
// edges, where each index i in
// edges contains vertex <span>i</span>'s siblings, in no
// particular order. Each individual edge is represented by a positive integer
// that denotes an index in the list that this vertex is connected to. Note that
// this graph is undirected, meaning that if a vertex appears in the edge list
// of another vertex, then the inverse will also be true.

// Also note that this graph may contain self-loops. A self-loop is an edge that
// has the same destination and origin; in other words, it's an edge that
// connects a vertex to itself. Any self-loop should make a graph not
// 2-colorable.

let edges = [
  [1, 2],
  [0, 2],
  [0, 1],
];

//Output false

//1. Create an array that keeps track of every node's color
//2. Push the connecting nodes into stack
//3. If opposite color push into stack
//4. If same color return false
//Time O(v + e) Space O(v)
//v is the number of vertices
//e is the number of edges

function twoColorable(edges) {
  const colors = edges.map((_) => null);
  colors[0] = true;
  const stack = [0];

  while (stack.length > 0) {
    const node = stack.pop();
    for (const connection of edges[node]) {
      if (colors[connection] === null) {
        colors[connection] = !colors[node];
        stack.push(connection);
      } else if (colors[connection] === colors[node]) {
        return false;
      }
    }
  }
  return true;
}
