/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    let ans = 0
    for (let i = 0; i < colors.length; i++) {
        if (isAlternating(i, colors)) ans++
    }
    return ans
};

function isAlternating(i, colors) {

    if (i === 1) {
        if (colors[i] === colors[colors.length - 1] && colors[i - 1] != colors[i]) return true
        else return false
    }

    if (i === 0) {
        if (colors[i] === colors[colors.length - 2] && colors[colors.length - 1] != colors[i]) return true
        else return false
    }


    if (colors[i] === colors[i - 2] && colors[i - 1] != colors[i]) return true
    else return false
}