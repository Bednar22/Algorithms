const test_graph = {
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

const bfs = (data) => {
    const queue = data['will'];
    const searchStopValue = 'bron';
    const searched = [];
    while (queue.length > 0) {
        const item = queue.shift();
        if (searched.includes(item)) {
            if (item === searchStopValue) {
                console.log('Item has been found!');
                return true;
            } else {
                data[item].forEach((elem) => queue.push(elem));
                searched.push(item);
            }
        }
    }
    console.log('Not found an item');
    return false;
};

bfs(test_graph);
