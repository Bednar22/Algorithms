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

module.exports = { binarySearch };
