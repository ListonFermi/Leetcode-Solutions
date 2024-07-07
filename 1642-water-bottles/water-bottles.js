/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let drankBottles = numBottles
    let emptyBottles = drankBottles
    while (emptyBottles >= numExchange) {

        const excessBottles = emptyBottles % numExchange
        const exchangedBottles = (emptyBottles - excessBottles) / numExchange
        emptyBottles = excessBottles

        drankBottles += exchangedBottles
        emptyBottles += exchangedBottles
    }
    return drankBottles
};