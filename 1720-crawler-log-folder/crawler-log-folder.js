/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let layer = 1
    let sameFolder, prevFolder, command
    for (let log of logs) {
        sameFolder = false;
        prevFolder = false;
        command = log.split('').reverse()
        if (command[1] === '.') {
            if (command[2] === '.') prevFolder = true
            else sameFolder = true
        }else{
            ++layer
        }

        if (sameFolder) continue

        if (prevFolder) layer > 1 ? --layer : layer
    }
    return layer-1
};