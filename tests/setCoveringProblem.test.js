const { setCoveringGreedyAlg } = require('../setCoveringProblem');

const TEST_DATA_TO_BE_COVERED = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const SETS = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az']),
};

const RESULT_SET = new Set(['kone', 'ktwo', 'kthree', 'kfive']);

test('should return set with names of sets that cover the input data', () => {
    expect(setCoveringGreedyAlg(TEST_DATA_TO_BE_COVERED, SETS)).toEqual(RESULT_SET);
});
