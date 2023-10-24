const { quicksort } = require('../recursive_functions/quicksort');

const TEST_ARRAY = [9, 23, 12, 11, 545, 2132, 212, 33, 2, 333];
const SORTED_ARRAY = TEST_ARRAY.sort((a, b) => a - b);

test('should return sorted array', () => {
    expect(quicksort(TEST_ARRAY)).toEqual(SORTED_ARRAY);
});
