const { sum } = require('../recursive_functions/sum');

const TEST_ARRAY = [10, 23, 100, 333];

test('should return sum of numbers in array', () => {
    expect(sum(TEST_ARRAY, TEST_ARRAY.length - 1)).toEqual(466);
});
