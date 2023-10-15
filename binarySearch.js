const testArray = [
    1, 3, 5, 7, 8, 11, 23, 54, 77, 78, 79, 82, 99, 100, 102, 109, 120, 122, 123, 125, 155, 166, 177, 178, 211, 232, 241,
    256,
];

const binarySearch = (data, target) => {
    let low = 0;
    let high = data[data.length - 1];

    while (low <= high) {
        const divider = Math.floor((low + high) / 2);
        const guess = data[divider];
        if (guess == target) {
            return divider;
        } else if (guess < target) {
            low = divider + 1;
        } else {
            high = divider - 1;
        }
    }
    return null;
};

console.log(binarySearch(testArray, 1));
