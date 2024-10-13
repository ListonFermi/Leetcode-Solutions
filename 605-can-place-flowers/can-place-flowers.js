/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let possiblePosition = 0
    let prev, next

    for (let i = 0; i < flowerbed.length; i++) {
        prev = flowerbed[i - 1]
        next = flowerbed[i + 1]

        if (i === 0) prev = 0

        if (i === flowerbed.length - 1) next = 0

        if (prev === 0 && next === 0 && flowerbed[i] === 0) {
            possiblePosition++
            i++
        }
    }
    return n <= possiblePosition
};