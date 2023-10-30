const { dijkstra } = require('../dijkstra');

const TEST_GRAPH_1 = {
    start: {
        a: 6,
        b: 2,
    },
    a: {
        end: 1,
    },
    b: {
        a: 3,
        end: 5,
    },
    end: {},
};

const TEST_1_RETURN = ['start', 'b', 'a', 'end'];

const TEST_GRAPH_2 = {
    start: {
        a: 5,
        b: 2,
    },
    a: {
        c: 4,
        d: 2,
    },
    b: {
        a: 8,
        d: 7,
    },
    c: {
        d: 6,
        end: 3,
    },
    d: {
        end: 1,
    },
    end: {},
};

const TEST_2_RETURN = ['start', 'a', 'd', 'end'];

test('should return right path for a graph 1', () => {
    expect(dijkstra(TEST_GRAPH_1)).toEqual(TEST_1_RETURN);
});

test('should return right path for a graph 2', () => {
    expect(dijkstra(TEST_GRAPH_2)).toEqual(TEST_2_RETURN);
});
