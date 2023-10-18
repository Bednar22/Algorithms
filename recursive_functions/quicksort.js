const testArray = [9, 23, 12, 11, 545, 2132, 212, 33, 2, 333];

const quicksort = (data) => {
    if (data.length <= 1) {
        return data;
    } else {
        const pivot = data[Math.floor(data.length / 2)];
        const lessThanPivot = data.filter((item) => item < pivot);
        const greaterThanPivot = data.filter((item) => item > pivot);
        return [...quicksort(lessThanPivot), pivot, ...quicksort(greaterThanPivot)];
    }
};

console.log(quicksort(testArray));
