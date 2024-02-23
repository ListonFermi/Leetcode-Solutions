/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (a) {
    if(a.length<2) return a

    const mid= Math.floor( a.length/2)
    const leftArr= a.slice(0,mid)
    const rightArr= a.slice(mid)

    return merge( sortArray(leftArr), sortArray(rightArr)    )
};

function merge(leftArr, rightArr){
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push( leftArr.shift() )
        }else{
            sortedArr.push( rightArr.shift()  )
        }
    }
    return [ ...sortedArr, ...leftArr , ...rightArr ]
}

const nums = [5,2,3,1]
console.log(sortArray(nums));