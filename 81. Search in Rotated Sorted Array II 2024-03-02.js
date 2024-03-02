var search = function (nums, target) {
  //   let swapped;
  //   do {
  //     swapped = false;
  //     for (let i = 0; i < nums.length; i++) {
  //       if (nums[i] > nums[i + 1]) {
  //         swapped = true;
  //         [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
  //       }
  //     }
  //   } while (swapped);

  function mergeSort(a) {
    if(a.length<2) return a
    const mid = Math.floor(a.length / 2);
    const leftArr = a.slice(0, mid);
    const rightArr = a.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }

  function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
  }

  mergeSort(nums);

  function binarySearch(nums, target) {
    let l = 0,
      r = nums.length;

    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (nums[m] === target) return true;

      if (target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return false;
  }

  return binarySearch(nums, target);
};

let nums = [2, 5, 6, 0, 0, 1, 2],
  target = 0;
console.log(search(nums, target));
