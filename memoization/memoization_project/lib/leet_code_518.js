// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function change(amount, coins, memo = {}) {
  // one way to give back change
  let key = amount + '-' + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let currentCoin = coins[coins.length - 1];

  // this is the total number of times the amount reaches 0 with the coins we have
  let total = 0;
  for (let qty = 0; qty * currentCoin <= amount; qty++) {
    total += change(amount - qty * currentCoin, coins.slice(0, -1), memo);
  }

  memo[key] = total;
  return memo[key];
}