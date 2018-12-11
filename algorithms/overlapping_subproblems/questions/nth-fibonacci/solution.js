// Memoization approach
class Fibbonacci {
  constructor() {
    this.store = {};
  }

  fib(n) {
    if (n < 0) {
      return 'Must be a positive Index';
    }

    if (n === 0 || n === 1) {
      return n;
    }

    if (this.memo.hasOwnProperty(n)) {
      return this.memo[n];
    }

    const result = this.fib(n - 1) + this.fib(n - 2);

    this.memo[n] = result;

    return result;
  }
}

// Bottom-up approach
//  O(n) time  O(1) space
function fib() {
  if (n < 0) {
    return 'Must be a positive Index';
  }

  if (n === 0 || n === 1) {
    return n;
  }

  let firstPrev = 0;
  let secondPrev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return current;
}
