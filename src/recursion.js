function recursion(tree, arr, depth) {
  const currentDepth = depth || 0;
  const currentArray = arr || [];

  if (currentArray[currentDepth] === undefined) {
    currentArray[currentDepth] = [tree.value];
  } else {
    currentArray[currentDepth].push(tree.value);
  }

  if (tree.left !== undefined) {
    recursion(tree.left, currentArray, currentDepth + 1);
  }
  if (tree.right !== undefined) {
    recursion(tree.right, currentArray, currentDepth + 1);
  }

  return currentArray;
}

module.exports = recursion;
