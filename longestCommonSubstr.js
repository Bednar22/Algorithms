const longestCommonSubstr = (str1, str2) => {
    let biggestNumber = 0;
    let charIndex = [0, 0];
    let grid = [...Array(str1.length)].map(() => Array(str2.length));
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j] && i != 0 && j != 0) {
                grid[i][j] = grid[i - 1][j - 1] + 1;
            } else if (str1[i] == str2[j] && (i == 0 || j == 0)) {
                grid[i][j] = 1;
            } else {
                grid[i][j] = 0;
            }
        }
    }
    grid.forEach((singleArray, index) => {
        const localBiggest = Math.max(...singleArray);
        if (localBiggest > biggestNumber) {
            biggestNumber = localBiggest;
            const localIndex = singleArray.findIndex((el) => el == localBiggest);
            charIndex = [index, localIndex];
        }
    });
    console.log(grid);
    return str1.slice(charIndex[0] - biggestNumber + 1, charIndex[0] + 1);
};

longestCommonSubstr('starq', 'starm');

module.exports = { longestCommonSubstr };
