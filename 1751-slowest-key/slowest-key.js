/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    const keyFreq = {}
    for (let i=0;i<releaseTimes.length;i++) {
        if (i == 0) {
            keyFreq[keysPressed[i]] = releaseTimes[i]
            continue
        }
        if(keyFreq[keysPressed[i]]){
            keyFreq[keysPressed[i]]= releaseTimes[i] - releaseTimes[i-1] > keyFreq[keysPressed[i]] ? releaseTimes[i] - releaseTimes[i-1] : keyFreq[keysPressed[i]]
        }else{

        keyFreq[keysPressed[i]]= releaseTimes[i] - releaseTimes[i-1]
        }

        
    }
    console.log(keyFreq)
    return helper(keyFreq)
};

function helper(keyFreq){
    const keyFreqArr = Object.entries(keyFreq)
    return keyFreqArr.reduce((acc,curr)=>{
        console.log('acc: '+acc+' curr: '+curr)
        if(curr[1]>acc[1]){
            return curr
        }else if(curr[1]==acc[1]){
            return curr[0]>acc[0]?curr:acc
        }else{
            return acc
        }
    },keyFreqArr[0])[0]
}