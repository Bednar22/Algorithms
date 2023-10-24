const { findBiggestNumber } = require('../recursive_functions/biggestNumber');

const TEST_ARRAY = [9, 23, 12, 11, 545, 2132, 212, 33, 2, 333];

test('should return sum of numbers in array', () => {
    expect(findBiggestNumber(TEST_ARRAY, TEST_ARRAY.length)).toEqual(2132);
});
