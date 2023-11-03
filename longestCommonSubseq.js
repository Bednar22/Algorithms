const longestCommonSubseq = (str1, str2) => {
    let grid = [...Array(str1.length)].map(() => Array(str2.length));
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] == str2[j] && i != 0 && j != 0) {
                grid[i][j] = grid[i - 1][j - 1] + 1;
            } else if (str1[i] == str2[j] && (i == 0 || j == 0)) {
                grid[i][j] = 1;
            } else if (str1[i] != str2[j] && (i == 0 || j == 0)) {
                if (i == 0 && j == 0) {
                    grid[i][j] = 0;
                } else if (i == 0 && j != 0) {
                    grid[i][j] = grid[i][j - 1];
                } else if (i != 0 && j == 0) {
                    grid[i][j] = grid[i - 1][j];
                }
            } else {
                grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }
    return grid[str1.length - 1][str2.length - 1];
};

module.exports = { longestCommonSubseq };
