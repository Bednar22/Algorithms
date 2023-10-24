const findBiggestNumber = (data, n) => {
    if (n === 1) {
        return data[0];
    }

    return Math.max(data[n - 1], findBiggestNumber(data, n - 1));
};

module.exports = { findBiggestNumber };
