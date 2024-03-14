var resultArray = function (nums) {
    const arr1 = [nums[0]], arr2 = [nums[1]]
    let arr1Last, arr2Last
    for (let i = 2; i < nums.length; i++) {
        arr1Last = arr1[arr1.length - 1]
        arr2Last = arr2[arr2.length - 1]


        if (arr1Last > arr2Last) arr1.push(nums[i])
        else arr2.push(nums[i])
    }

    return [...arr1, ...arr2]
};

const nums = [6,5,14,15]
console.log(resultArray(nums));
