/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    const ans = Array(num_people).fill(0)

    let i=0;loops=0, givenCandy =0

    while(candies>0){
        if(i==num_people){
            i=0
            loops++
        }
        givenCandy = Math.min((loops*num_people)+(i+1), candies)

        ans[i] += givenCandy
        candies -= givenCandy
        i++
    }

    return ans
};


// var distributeCandies = function (candies, num_people) {
//     const ans = Array(num_people).fill(0)
//     let i=1, isP1 = true, n=0, j=0 , k=1, givenCandy
//     while(candies>0){
        
//         if(isP1) givenCandy = Math.min(candies,i)  //1 
//         else givenCandy = Math.min(candies,n+i)
        
//         ans[j++] += givenCandy    //1
//         candies -= givenCandy    //9

//         if(i%num_people===0){
            
//             if(isP1) n+=num_people
//             else n+=2*num_people
    
//             isP1 = !isP1
//             i=1
//             j=0
//         }else{    
//             i++
//         }
//     }
//     return ans
// };


//  const ans = new Array(num_people).fill(0)

//     let isPattern1 = true, j = 0, givenCandy
    
//     for (let i = 1; i <= candies; i++) {
//         if (isPattern1) givenCandy = j + 1
//         else givenCandy = num_people + j + 1

//         ans[j] += givenCandy
//         candies -= givenCandy

//         if (i % num_people === 0) {
//             isPattern1 = !isPattern1
//             j = 0
//         } else {
//             j++
//         }
//     }
//     return ans