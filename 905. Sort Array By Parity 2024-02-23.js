var sortArrayByParity = function(nums) {
    let even=[], odd=[], i=0
    while(nums.length){
        if(nums[i]%2==0){
            even.push(...nums.splice(i,1))
        }else{
            odd.push(...nums.splice(i,1))
        }
    }
    return [...even,...odd]
};


//2 pointer 
function sortArrayByParity2Pointer(a){
    let i=0,j=a.length-1,temp
    while(i<j){
        if(a[i]%2!=0 && a[j]%2==0){
            temp=a[i]
            a[i]=a[j]
            a[j]= temp
            i++
            j--
        }else if(a[i]%2===0){
            i++
        }else if(a[j]%2!=0){
            j--
        }

    }
    return a
}

const nums = [3,1,2,4]
console.log(sortArrayByParity2Pointer(nums));