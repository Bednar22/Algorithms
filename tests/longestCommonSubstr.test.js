const { longestCommonSubstr } = require('../longestCommonSubstr');

const TEST_1_STR_1 = 'hish';
const TEST_1_STR_2 = 'vista';
const TEST_1_RESULT = 'is';

const TEST_2_STR_1 = 'starq';
const TEST_2_STR_2 = 'starm';
const TEST_2_RESULT = 'star';

const TEST_3_STR_1 = 'estarq';
const TEST_3_STR_2 = 'strm';
const TEST_3_RESULT = 'st';

test('should return longest common substring', () => {
    expect(longestCommonSubstr(TEST_1_STR_1, TEST_1_STR_2)).toEqual(TEST_1_RESULT);
});

test('should return longest common substring when in the beggining of the both string', () => {
    expect(longestCommonSubstr(TEST_2_STR_1, TEST_2_STR_2)).toEqual(TEST_2_RESULT);
});

test('should return longest common substring when in the beggining of the 2nd string ', () => {
    expect(longestCommonSubstr(TEST_3_STR_1, TEST_3_STR_2)).toEqual(TEST_3_RESULT);
});
