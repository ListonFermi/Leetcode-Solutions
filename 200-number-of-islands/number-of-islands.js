/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++
                explore(grid, i, j)
            }
        }
    }
    return count
};

var explore = function (grid, i, j) {
    if ( i < 0 || j < 0 || i >= grid.length || j >= grid[0].length ||grid[i][j] === '0' ) return null

    grid[i][j] = '0'

    explore(grid, i, j + 1); // Explore right
    explore(grid, i + 1, j); // Explore down
    explore(grid, i, j - 1); // Explore left
    explore(grid, i - 1, j); // Explore up

}