function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const t = new TreeNode(
    4,
    new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(
        7,
        new TreeNode(6),
        new TreeNode(9)
    )
);
console.log(t)



var invertTree = function (root) {
if(root === null) return null;
let temp=root.left;
root.left=root.right;
root.right=temp;

invertTree(root.right)
invertTree(root.left)



};

invertTree(t)
console.log(t)