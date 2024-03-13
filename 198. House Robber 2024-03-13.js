var rob = function (nums) {
  const dp=[0,nums[0]] 
  for(let i=1;i<nums.length;i++){
    dp.push( Math.max( dp[i] , dp[i-1]+nums[i]    )      )
  } 
  return dp[nums.length]
}

const nums= [2,7,9,3,1]
console.log(rob(nums));


/*
second attempt

var rob = function (nums) {
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let i = 0,
    firstHouseIteration = 0,
    nextHouse;
  while (i < nums.length) {
    firstHouseIteration += nums[i];
    if (nums[i + 2] > nums[i + 3]) {
      nextHouse = i + 2;
    } else if (nums[i + 2] === nums[i + 3]) {
      if (nums[i + 4] > nums[i + 5]) {
        nextHouse = i + 2;
      } else {
        nextHouse = i + 3;
      }
    } else {
      nextHouse = i + 3;
    }
    i = nextHouse;
  }
    // return nextHouse
  let secondHouseIteration = 0;
  (nextHouse = 0), (i = 1);
  while (i < nums.length) {
    secondHouseIteration += nums[i];
    if (nums[i + 2] > nums[i + 3]) {
      nextHouse = i + 2;
    } else if (nums[i + 2] === nums[i + 3]) {
      if (nums[i + 4] > nums[i + 5]) {
        nextHouse = i + 2;
      } else {
        nextHouse = i + 3;
      }
    } else {
      nextHouse = i + 3;
    }
    i = nextHouse;
  }
  // return firstHouseIteration
  return Math.max(firstHouseIteration, secondHouseIteration);
};

const nums = [2,4,8,9,9,3]
console.log(rob(nums));

*/

/*
First Attempt 


var rob = function (nums) {
  let evenPlaces = 0,
    oddPlaces = 0;
  for (let i in nums) {
    if (i % 2 === 0) evenPlaces += nums[i];
    else oddPlaces += nums[i];
  }
  return evenPlaces;
};

const nums = [2, 1, 1, 2];
console.log(rob(nums));

*/