// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return -1;
  let heightDifference = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(root) {
  if (!root) return -1;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

// var isBalanced = function (root) {
//   if (!root) return true;

//   if (Math.abs(checkDepth(root.left) - checkDepth(root.right)) > 1) {
//     return false;
//   }

//   return isBalanced(root.left) && isBalanced(root.right);
// };

// function checkDepth(root) {
//   if (!root) return 0;
//   return 1 + Math.max(checkDepth(root.left), checkDepth(root.right));
// }