/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0
    let r = height.length - 1
    let minH, area, length
    let maxArea = -Infinity

    while (l < r) {
        minH = Math.min(height[l], height[r])
        length = r - l
        area = minH * length

        if (height[l]<height[r]) {
            l++
        } else {
            r--
        }
        maxArea = Math.max(maxArea, area)
    }
    return maxArea
};