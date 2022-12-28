//   You're given two positive integers representing the width and height of a
//   grid-shaped, rectangular graph. Write a function that returns the number of
//   ways to reach the bottom right corner of the graph when starting at the top
//   left corner. Each move you take must either go down or right. In other words,
//   you can never move up or left in the graph.

//   For example, given the graph illustrated below, with width = 2 and height = 3,
//   there are 3 ways to reach the bottom right corner when starting at the top left corner

let width = 4;
let height = 3;

//Output = 10

function numberOfWaysToTraverseGraph(width, height) {
  const ways = Array(width)
    .fill(null)
    .map(() => Array(height).fill(null));

  ways[0][0] = 0;

  for (let i = 1; i < width; i++) {
    ways[i][0] = 1;
  }
  for (let j = 1; j < height; j++) {
    ways[0][j] = 1;
  }

  for (let j = 1; j < height; j++) {
    for (let i = 1; i < width; i++) {
      console.log(`i is ${i}`);
      ways[i][j] = ways[i - 1][j] + ways[i][j - 1];
      console.log(ways[i][j]);
    }
  }
  console.log(ways[width - 1][height - 1]);
  return ways[width - 1][height - 1];
}

numberOfWaysToTraverseGraph(width, height);

//ways[i][j] = ways[i-1][j] + ways[i][j-1]
//ways[4][3] = ways[4-1][3] + ways[4][3-1]
//             ways[2][2] (6) + ways[3][1] (4)
//             ways[i=3][j=2] + ways[i=3][j=2]

//   return 0;

//Recursive Solution

function numberOfWaysToTraverseGraph(width, height) {
  if (width === 1 || height === 1) return 1;

  return (
    numberOfWaysToTraverseGraph(width - 1, height) +
    numberOfWaysToTraverseGraph(width, height - 1)
  );
}
