/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    return names.map( (val, ind) => [val, heights[ind] ] ).sort((a, b) => b[1]- a[1] ).map( val=>val[0])
};