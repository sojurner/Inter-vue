## Overlapping Subproblems

#### Definition:

A problem in which finding its solution involves solving the same subproblem multiple times

#### Example:

```
function fib(n){
  if(n === 0 || n === 1) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}
```

fib(n-1) and fib(n-2) are subproblems of fib(n)
