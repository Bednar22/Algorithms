const { quicksort } = require('../recursive_functions/quicksort');

const TEST_ARRAY = [9, 23, 12, 11, 545, 2132, 212, 33, 2, 333];
const SORTED_ARRAY = TEST_ARRAY.sort();

test('should return sorted array', () => {
    console.log(quicksort(SORTED_ARRAY));
    expect(quicksort(TEST_ARRAY)).toEqual(TEST_ARRAY.sort());
});
