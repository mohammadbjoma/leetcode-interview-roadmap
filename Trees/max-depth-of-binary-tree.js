var maxDepth = function(root) {
    if (root === null) return 0;

    let depth = 0;
    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length;
        depth++;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return depth;
};
