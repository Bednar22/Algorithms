const testArray = [9, 23, 12, 11, 545, 212, 33, 2, 333];

const sum = (data, n) => {
    if (n == 1) {
        return data[0];
    }

    return data[n - 1] + sum(data, n - 1);
};

console.log(sum(testArray, testArray.length));
