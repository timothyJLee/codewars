/*
110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/

 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

 // is tree an AVL balanced tree
function isBalanced(root) {

    if(root == null) return true;
    
    const dfsHeight = (node) => {
      // check if node is null return -1
      if (node == null) { return 0; }

     let lHeight = dfsHeight(node.left);
     let rHeight = dfsHeight(node.right);

      // check if height is < 0 for either return -1
      if (lHeight < 0 || rHeight < 0) { return -1; }

      // check if the difference in height is greater than 1 return -1
      if (Math.abs(lHeight - rHeight) > 1) {return -1;} // if l-r > 1 || l-r < -1

      // tree is balanced, return height + 1
      return Math.max(lHeight,rHeight) + 1;
    };

    return dfsHeight(root) > -1 ? true : false;
}