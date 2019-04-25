// linked list is considered a tree
// binary tree is a tree where a node has at most 2 children

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Tree Order
// In-order: left, self, right
// D, B, E, A, C, F

// Pre-order: self, left, right
// A, B, D, E, C, F

// Post-order: left, right, self
// D, E, B, F, C, A

function inOrderPrint(root) {
  if (root === null) return null; // when tree is empty return null

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

function preOrderPrint(root) {
  if (root === null) return null;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

function postOrderPrint(root) {
  if (root === null) return null;

  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}