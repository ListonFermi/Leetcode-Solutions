/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (n, t) {
  let ans = [];
  function binarySearch(nums, target) {
    let l = 0,
      r = nums.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) {
        return mid;
      }
      if (target < mid) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return -1;
  }

  let ind1= binarySearch(n,t)
  if(ind1!==-1){
    n.splice(ind1,1)
    let ind2= binarySearch(n,t)
    ans.push(ind1,ind2)
  }else{
    ans.push(-1,-1)
  }

  return ans


};

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;
console.log(searchRange(nums, target));
