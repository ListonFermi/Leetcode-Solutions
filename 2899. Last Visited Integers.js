/**
 * @param {string[]} words
 * @return {number[]}
 */
var lastVisitedIntegers = function (words) {
    let k = 1, ans = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] == 'prev') {
            let nums=[]
            k = words[i - 1] == 'prev' ? ++k : 1
            for (let j = 0; j < i; j++) {
                if (words[j] !== 'prev')
                    nums.push(words[j])
            }
            
            let reverse_nums = nums.reverse()
            if (k > nums.length) {
                ans.push(-1)
            } else {
                ans.push(Number(reverse_nums[k - 1]))
            }
        }

    }

    return ans
};


let words = ["1","prev","2","prev","prev"]
console.log(lastVisitedIntegers(words));