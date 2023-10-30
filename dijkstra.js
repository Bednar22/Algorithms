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

const createPath = (parents) => {
    const path = ['end'];
    while (path[path.length - 1] != 'start') {
        const nodeBefore = parents[path[path.length - 1]];
        path.push(nodeBefore);
    }
    return path.reverse();
};

const prepareCosts = (graph) => {
    let costs = { ...graph.start };

    for (node in graph) {
        if (!(node in costs) && node != 'start') {
            costs[node] = max;
        }
    }

    return costs;
};

const prepareParents = (graph) => {
    let parents = {};

    for (node in graph) {
        if (!(node in parents)) {
            if (node == 'start') {
                for (startNode in graph['start']) {
                    parents[startNode] = 'start';
                }
            } else {
                parents[node] = undefined;
            }
        }
    }

    return parents;
};

const dijkstra = (graph) => {
    let parents = prepareParents(graph);
    let costObject = prepareCosts(graph);

    const processed = [];
    let node = findLowestCostNode(costObject, processed);
    while (node != undefined) {
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
    return createPath(parents);
};

module.exports = { dijkstra };
