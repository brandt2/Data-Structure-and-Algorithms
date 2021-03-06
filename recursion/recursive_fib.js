// Write a method fib(n) that takes in a number and returns the nth number of
// the fibonacci sequence.
//
// In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
// next number in the sequence, we take the sum of the previous two fibonacci numbers.
// For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`
//
// Examples:
//
// fib(1) // => 1
// fib(2) // => 1
// fib(3) // => 2
// fib(4) // => 3
// fib(5) // => 5
// fib(6) // => 8
// fib(7) // => 13

function fibonacci(num){
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));
console.log(fibonacci(6));
console.log(fibonacci(5));
console.log(fibonacci(4));
console.log(fibonacci(3));
console.log(fibonacci(2));
console.log(fibonacci(1));