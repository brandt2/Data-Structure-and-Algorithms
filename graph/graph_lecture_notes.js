class GraphNode {
  constructor(val){
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let a = new GraphNode('c');
let b = new GraphNode('d');
let a = new GraphNode('e');
let b = new GraphNode('f');
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// function depthFirst(node, visited=new Set()) {
//   if (visited.has(node.val)) return;
//   visited.add(node.val);
//   console.log(node.val);
//   node.neighbors.forEach((neighbor) => depthFirst(neighbor, visited));
// }

let graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

function depthFirst(graph, node, visited=new Set()){
  if (visited.has(node)) return;
  console.log(visited);
  visited.add(node);
  graph[node].forEach((neighbor) => depthFirst(graph, neighbor, visited));
}

depthFirst(graph, 'a');