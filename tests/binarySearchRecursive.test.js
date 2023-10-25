const { binarySearchRecursive } = require('../recursive_functions/binarySearchRecursive');

const TEST_ARRAY = [
    1, 3, 5, 7, 8, 11, 23, 54, 77, 78, 79, 82, 99, 100, 102, 109, 120, 122, 123, 125, 155, 166, 177, 178, 211, 232, 241,
    256,
];

test('should return index of value that is in first half of an array', () => {
    const index = 8;
    const searchedValue = TEST_ARRAY[index];

    const searchResult = binarySearchRecursive(
        TEST_ARRAY,
        searchedValue,
        0,
        Math.floor((0 + TEST_ARRAY[TEST_ARRAY.length - 1]) / 2),
        TEST_ARRAY[TEST_ARRAY.length - 1]
    );
    expect(searchResult).toEqual(index);
});

test('should return index of value that is in second half of an array', () => {
    const index = 24;
    const searchedValue = TEST_ARRAY[index];

    const searchResult = binarySearchRecursive(
        TEST_ARRAY,
        searchedValue,
        0,
        Math.floor((0 + TEST_ARRAY[TEST_ARRAY.length - 1]) / 2),
        TEST_ARRAY[TEST_ARRAY.length - 1]
    );
    expect(searchResult).toEqual(index);
});
