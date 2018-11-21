const stockPrices = [10, 6, 5, 9, 11, 7];

const getMaxProfit = prices => {
  let minPrice = prices[0];
  let maxProfit = prices[1] - stockPrices[0];
  for (let i = 0; i < prices.length; i++) {
    const currPrice = stockPrices[i];
    const potentialProfit = currPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currPrice);
  }
  return maxProfit;
};

getMaxProfit(stockPrices);
