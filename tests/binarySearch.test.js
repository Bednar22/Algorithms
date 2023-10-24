const { binarySearch } = require('../binarySearch');

const TEST_ARRAY = [
    1, 3, 5, 7, 8, 11, 23, 54, 77, 78, 79, 82, 99, 100, 102, 109, 120, 122, 123, 125, 155, 166, 177, 178, 211, 232, 241,
    256,
];

test('should return index of value that is in array', () => {
    const index = 6;
    const searchedValue = TEST_ARRAY[6];

    expect(binarySearch(TEST_ARRAY, searchedValue)).toEqual(index);
});

test('should return null if value is not in array', () => {
    const searchedValue = 999;

    expect(binarySearch(TEST_ARRAY, searchedValue)).toEqual(null);
});
