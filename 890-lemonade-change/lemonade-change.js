/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const drawer = {}
    for (let bill of bills) {
        if (drawer[bill]) drawer[bill]++
        else drawer[bill] = 1

        if (bill === 5) continue;

        if (bill === 10 && drawer[5] > 0) {
            drawer[5]--
        } else if (bill === 20 && drawer[10] > 0 && drawer[5] > 0) {
            drawer[10]--
            drawer[5]--
        } else if (bill === 20 && drawer[5] > 2) {
            drawer[5] -= 3
        } else {
            return false
        }
    }
    return true
};