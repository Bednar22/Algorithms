const { bfs } = require('../bfs');

const TEST_GRAPH = {
    will: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['thom', 'jonny'],
    anuj: [],
    peggy: [],
    thom: ['bron'],
    jonny: [],
    bron: [],
};

test('should return true when node is in graph', () => {
    expect(bfs(TEST_GRAPH, 'bron')).toEqual(true);
});

test('should return false when there is no node in graph', () => {
    expect(bfs(TEST_GRAPH, 'random value')).toEqual(false);
});
