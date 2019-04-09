// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.

// factorial(5) = 5 * 4 * 3 * 2 * 1
// factorial(4) = 4 * 3 * 2 * 1
// factorial(3) = 3 * 2 * 1
// factorial(2) = 2 * 1
// factorial(1) = 1 (base case)

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));