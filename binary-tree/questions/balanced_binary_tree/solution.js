export const isBalanced = tree => {
  if (!tree) {
    return true;
  }

  const depths = [];

  const nodes = [];
  node.push([treeroot, 0]);

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
        if (
          depths.length > 2 ||
          (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          return false;
        } else {
          if (node.left) {
            nodes.push([node.left, depth + 1]);
          }
          if (node.right) {
            nodes.push[(node.right, depth + 1)];
          }
        }
      }
    }
  }
  return true;
};

//COMPLEXITY
/* 
Time
  - O(n)
Space
  - O(n)
 */
