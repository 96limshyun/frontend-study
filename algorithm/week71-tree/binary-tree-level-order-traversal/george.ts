/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];

    const dfs = (node: TreeNode | null, depth: number) => {
      if (!node) return;

      if (res.length === depth) {
        res.push([]);
      }

      res[depth].push(node.val);
      dfs(node.left, depth + 1);
      dfs(node.right, depth + 1);
    };
    dfs(root, 0);

    return res;
  }
}
