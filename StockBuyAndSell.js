function StockBuyAndSell(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // let minimumPrice = prices[0];
    for (let j = i + 1; j < prices.length; j++) {
      //   difference = prices[j] - minimumPrice;
      //   maxProfit = Math.max(maxProfit, difference);

      if (prices[j] > prices[i]) {
        maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
      }
    }
  }
  return maxProfit;
}

function StockBuyAndSellOptimalSolution(prices) {
  let buyPrice = prices[0];

  let objPrice = {};
  let maxValue = -Infinity;

  for (let i = 1; i < prices.length; i++) {
    let difference = prices[i] - buyPrice;
    //Object.assign(objPrice, {id: prices[i], diff: difference})
    objPrice[prices[i]] = difference;
  }

  console.log(Object.entries(objPrice));

  //   for (let [key, value] of Object.entries(objPrice)) {
  //     if (value > maxValue) {
  //       maxValue = objPrice[key];
  //     }
  //   }
  //   console.log(objPrice);
  //return objPrice;

  //Or

  maxValue = Math.max(...Object.values(objPrice));

  return maxValue;
}

function StockBuyAndSellAnotherSolution(prices) {
  let prevousMinimumPrice = Infinity; //Number.MAX_SAFE_INTEGER;

  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    prevousMinimumPrice = Math.min(prevousMinimumPrice, prices[i]); //We maade sure that we keep minimum as minimum
    console.log(prevousMinimumPrice);
    maxProfit = Math.max(maxProfit, prices[i] - prevousMinimumPrice);
    console.log(maxProfit);
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];

console.log(StockBuyAndSell(prices));
console.log("==================================");
console.log(StockBuyAndSellOptimalSolution(prices));

console.log("Solution ------------------------");

console.log(StockBuyAndSellAnotherSolution(prices));
