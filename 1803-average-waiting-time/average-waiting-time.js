/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {

    let  timeStarted = 0, timeFinished = 0, waitingTime =0

    for (let i = 0; i < customers.length; i++) {

        timeStarted = Math.max(timeFinished, customers[i][0]) //1    // 3, 2
        timeFinished = timeStarted + customers[i][1]  //3   

        waitingTime += (timeFinished - customers[i][0])
    }
    return waitingTime / customers.length
}