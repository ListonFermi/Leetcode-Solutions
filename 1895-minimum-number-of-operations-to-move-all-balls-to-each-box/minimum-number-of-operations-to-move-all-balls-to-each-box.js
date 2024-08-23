/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    boxes = boxes.split('')

    const oneIndexes = []
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] === '1') oneIndexes.push(i)
    }

    let answer=[], steps
    for (let i = 0; i < boxes.length; i++) {
        steps = 0
        for (let ind of oneIndexes) {
            steps += Math.abs(i - ind)
        }
        answer[i] = steps
    }
    return answer
};