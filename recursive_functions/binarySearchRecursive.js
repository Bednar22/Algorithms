const testArray = [
    1, 3, 5, 7, 8, 11, 23, 54, 77, 78, 79, 82, 99, 100, 102, 109, 120, 122, 123, 125, 155, 166, 177, 178, 211, 232, 241,
    256,
];

const binarySearchRecursive = (data, target, low, divider, high) => {
    if (target == data[divider]) {
        return divider;
    } else if (data[divider] < target) {
        return binarySearchRecursive(data, target, divider + 1, Math.floor((divider + high) / 2), high);
    } else {
        return binarySearchRecursive(data, target, low, Math.floor((low + divider) / 2), divider - 1);
    }
};

console.log(
    binarySearchRecursive(
        testArray,
        54,
        0,
        Math.floor((0 + testArray[testArray.length - 1]) / 2),
        testArray[testArray.length - 1]
    )
);
