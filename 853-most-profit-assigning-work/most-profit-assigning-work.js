/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    const coupled = difficulty.map((v,i)=>[v,profit[i]])
    const profitS = coupled.sort((a, b) => b[1]-a[1])
    let finalProfit=0
    for (let i = 0; i < worker.length; i++) {
        for(let j=0;j<profitS.length;j++){
            if(profitS[j][0] <= worker[i]){
                finalProfit+= profitS[j][1]
                break
            }   
        }
    }
    return finalProfit
};