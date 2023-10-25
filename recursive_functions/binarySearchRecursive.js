const binarySearchRecursive = (data, target, low, divider, high) => {
    if (target == data[divider]) {
        return divider;
    } else if (data[divider] < target) {
        return binarySearchRecursive(data, target, divider + 1, Math.floor((divider + 1 + high) / 2), high);
    } else {
        return binarySearchRecursive(data, target, low, Math.floor((low + divider) / 2), divider - 1);
    }
};

module.exports = { binarySearchRecursive };
