/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize) return false;
    hand.sort((a, b) => a - b);
    for (let i = 0; i < hand.length; i++) {
        if (hand[i]===null) continue
        let group = 0, curr = hand[i];
        for (let j = i + 1; j < hand.length; j++) {
            if (hand[j]===null) continue
            if ((hand[j] === curr + 1) && group < groupSize - 1) {
                hand[j] = null;
                group++;
                curr++;
            }
        }
        if (group != groupSize-1) return false;
    }
    return true
};