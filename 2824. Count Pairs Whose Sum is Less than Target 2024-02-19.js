/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var countPairs = function (nums, target) {
//   nums = nums.sort((a, b) => a - b);
//   let count = 0,    i = 0,    j = nums.length - 1;
//   while (i < j) {
//     if (nums[i] + nums[j] < target) {
//       count++;
//       j--;
//     } else {
//       i++;
//     }
//   }
//   return count;
// };

let nums = [-6, 2, 5, -2, -7, -1, 3], target = -2;
console.log(countPairs(nums, target));