const TEST_GRAPH = {
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

const max = 1000000;

const findLowestCostNode = (costTableArg, processed) => {
    let lowestCost = max;
    let lowestCostNode = undefined;

    for (node in costTableArg) {
        const cost = costTableArg[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
};

const dijkstra = (graph) => {
    let costObject = {
        a: 6,
        b: 2,
        end: max,
    };

    let parents = {
        a: 'start',
        b: 'start',
        end: null,
    };

    const processed = [];
    let node = findLowestCostNode(costObject, processed);
    while (node != undefined) {
        console.log(node);
        cost = costObject[node];
        neighbours = graph[node];
        for (neighbour in neighbours) {
            newCost = cost + neighbours[neighbour];
            if (costObject[neighbour] > newCost) {
                costObject[neighbour] = newCost;
                parents[neighbour] = node;
            }
        }
        processed.push(node);
        node = findLowestCostNode(costObject, processed);
    }
    return parents;
};

console.log(dijkstra(TEST_GRAPH));
