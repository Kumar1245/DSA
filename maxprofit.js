function maxProfit(prices) {
  let min = prices[0], profit = 0;
  for (let p of prices) {
    min = Math.min(min, p);
    profit = Math.max(profit, p - min);
  }
  return profit;
}
