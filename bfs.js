const bfs = (data, searchStopValue) => {
    const queue = data['will'];
    const searched = [];

    while (queue.length > 0) {
        const item = queue.shift();
        if (!searched.includes(item)) {
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

module.exports = { bfs };
