var maxProfit = function(prices) {
    let minprice=Infinity;
    let maxprofit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minprice){
            minprice=prices[i]
        }else{
            let profit=prices[i]-minprice
         if(profit>maxprofit) maxprofit=profit
         
              }
    }
    return maxprofit
    };