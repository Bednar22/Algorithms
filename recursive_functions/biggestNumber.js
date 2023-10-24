const testArray = [9, 23, 12, 11, 545, 2132, 212, 33, 2, 333];

const findBiggestNumber = (data, n) => {
    if (n === 1) {
        return data[0];
    }

    return Math.max(data[n - 1], findBiggestNumber(data, n - 1));
};

console.log(findBiggestNumber(testArray, testArray.length));

module.exports = { findBiggestNumber };
