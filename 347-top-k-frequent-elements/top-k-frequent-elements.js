/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const freq = {}
    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]]) freq[nums[i]]++
        else freq[nums[i]] = 1
    }
    console.log(freq)
    
    let freqEntries = Object.entries(freq)

    freqEntries = freqEntries.sort((a,b)=>b[1]-a[1])
    console.log(freqEntries)
    const result = []
    for(let i=0;i<k;i++){
        result.push(Number(freqEntries[i][0]))
    }

    return result
};