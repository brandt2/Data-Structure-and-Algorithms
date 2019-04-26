// Depth first traversal
// Use a stack (LIFO)
//        A
//      /   \
//     B     C
//    / \     \
//   D   E      F
//  A, B, D, E, C, F

function depthFirst(root) {
  let stack = [root];

  while (stack.length) {
    let currentNode = stack.pop();

    console.log(currentNode.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

function depthFirstRecur(root){
  if (!root) return;

  console.log(root.val);
  depthFirstRecur(root.left);
  depthFirstRecur(root.right);
}

// Breadth first traversal
// Use a queue (FIFO)
//        A
//      /   \
//     B     C
//    / \     \
//   D   E      F
//  A, B, C, D, E, F

function breadthFirst(root) {
  let queue = [root];

  while (queue.length) {
    let currentNode = queue.shift();

    console.log(currentNode.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}