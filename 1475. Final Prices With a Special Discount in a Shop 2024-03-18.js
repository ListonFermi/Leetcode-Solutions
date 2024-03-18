var finalPrices = function(prices) {
    return prices.map((v,i)=>{
        j= i+1
        while(j<prices.length){
            if(prices[j]<= v){
                return v-=prices[j]
            }
            j++
        }
        return v
    })
};

const prices = [1,2,3,4,5]
console.log(finalPrices(prices));