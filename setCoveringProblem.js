const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az']),
};

const setCoveringGreedyAlg = (setsToCoverInput, sets) => {
    let setsToCover = setsToCoverInput;
    const result = new Set();
    while (setsToCover.size != 0) {
        let bestSet = undefined;
        let setsCovered = new Set();
        for (singleSet in sets) {
            const covered = new Set([...setsToCover].filter((i) => sets[singleSet].has(i)));
            if (covered.size > setsCovered.size) {
                bestSet = singleSet;
                setsCovered = covered;
            }
        }
        setsToCover = new Set([...setsToCover].filter((x) => !setsCovered.has(x)));
        result.add(bestSet);
    }
    return result;
};

module.exports = { setCoveringGreedyAlg };
