function recursion(tree, arr, depth) {
    if (depth === undefined) {
        depth = 0;
    };
    if (arr === undefined) {
        arr = [];
    }

    if (arr[depth] === undefined) {
        arr[depth] = [tree.value];
    } else {
        arr[depth].push(tree.value);
    }

    if (tree.left !== undefined) {
        recursion(tree.left, arr, depth + 1);
    }
    if (tree.right !== undefined) {
        recursion(tree.right, arr, depth + 1);
    }
    return arr;
}