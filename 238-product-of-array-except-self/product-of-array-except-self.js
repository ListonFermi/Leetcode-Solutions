/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const prefixProd = [], suffixProd = []
    let prev

    for (let i = 0; i < nums.length; i++) {
        prev = prefixProd[i - 1] != undefined ? prefixProd[i - 1] : 1
        prefixProd[i] = prev * nums[i]

        prev = suffixProd[nums.length - i] != undefined ? suffixProd[nums.length - i] : 1
        suffixProd[nums.length - 1 - i] = prev * nums[nums.length - 1 - i]
    }

    console.log({ prefixProd, suffixProd })

    for (let i = 0; i < nums.length; i++) {
        const prefixProduct = prefixProd[i - 1] != undefined ? prefixProd[i - 1] : 1
        const suffixProduct = suffixProd[i + 1] != undefined ? suffixProd[i + 1] : 1
        nums[i] = prefixProduct * suffixProduct
    }
    return nums
};