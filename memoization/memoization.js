// MEMOIZATION

let memo = {};

function factorial(n) {
  // checks if key is inside object
  if (n in memo) {
    console.log('fetching memo for', n);
    return memo[n];
  };

  if (n === 1) return 1;

  let ans = n * factorial(n - 1);
  console.log('storing memo for', n);
  memo[n] = ans;
  return ans;
}

console.log(factorial(6)); // 6 steps
console.log(memo);
console.log(factorial(5)); // 1 step (constant time)

// -----------------------------------------------------------------------------

function fib(n, memo = {}) {
  // if the arg is in the memo, fetch the val and return it
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  // if the arg is not in the memo, calculate it recursively, but save it in the memo for the future
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log();
