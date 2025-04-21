/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    const totalSequenesCount = upper - lower + 1
    let possibleSequence = 0

    let max = -Infinity
    let min = Infinity

    let sum = 0
    for (let diff of differences) {
        sum += diff

        if (sum > max) max = sum
        if (sum < min) min = sum
    }


    for (let i = lower; i <= upper; i++) {
        if (i + max > upper) {
            continue
        } else if ( i+ min < lower  ) {
            continue
        }
        possibleSequence++
    }


    return possibleSequence
};