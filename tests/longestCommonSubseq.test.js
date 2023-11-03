const { longestCommonSubseq } = require('../longestCommonSubseq');

const TEST_1_STR_1 = 'hish';
const TEST_1_STR_2 = 'hysa';
const TEST_1_RESULT = 2;

const TEST_2_STR_1 = 'starq';
const TEST_2_STR_2 = 'starm';
const TEST_2_RESULT = 4;

const TEST_3_STR_1 = 'estarq';
const TEST_3_STR_2 = 'strm';
const TEST_3_RESULT = 3;

test('should return longest common substring', () => {
    expect(longestCommonSubseq(TEST_1_STR_1, TEST_1_STR_2)).toEqual(TEST_1_RESULT);
});

test('should return longest common substring when in the beggining of the both string', () => {
    expect(longestCommonSubseq(TEST_2_STR_1, TEST_2_STR_2)).toEqual(TEST_2_RESULT);
});

test('should return longest common substring when in the beggining of the 2nd string ', () => {
    expect(longestCommonSubseq(TEST_3_STR_1, TEST_3_STR_2)).toEqual(TEST_3_RESULT);
});
