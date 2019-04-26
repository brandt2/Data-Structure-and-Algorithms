function inOrderArray(root) {
    if (!root) return [];
    let result = [];

    result = result.concat(inOrderArray(root.left));
    result = result.concat(root.val);
    result = result.concat(inOrderArray(root.right));

    return result;
}

function postOrderArray(root) {
    if (!root) return [];
    let result = [];

    result = result.concat(postOrderArray(root.left));
    result = result.concat(postOrderArray(root.right));
    result = result.concat(root.val);

    return result;
}


module.exports = {
    inOrderArray,
    postOrderArray
};