/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    if (list2.length < list1.length) {
        [list2, list1] = [list1, list2]
    }
    let otherInd, res = [], S = Infinity
    for (let i = 0; i < list1.length; i++) {
        otherInd = list2.indexOf(list1[i])
        if (otherInd != -1) {
            res.push([list1[i], i + otherInd])
            S = i + otherInd < S ? i + otherInd : S
        }

    }
    return res.filter(v => v[1] === S).map(v => v[0])
};